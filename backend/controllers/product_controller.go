package controllers

import (
	"context"
	"net/http"
	"time"

	"backend/configs"
	"backend/models"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var productCollection *mongo.Collection = configs.GetCollection(configs.DB, "products")

// CreateProduct - เพิ่มสินค้าใหม่
func CreateProduct(c *gin.Context) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var product models.Product
	defer cancel()

	// ตรวจสอบว่า JSON ที่ส่งมาถูกต้องตาม Struct ไหม
	if err := c.BindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newProduct := models.Product{
		ID:           primitive.NewObjectID(),
		Name:         product.Name,
		Brand:        product.Brand,
		Category:     product.Category,
		Description:  product.Description,
		Price:        product.Price,
		CountInStock: product.CountInStock,
		ImageUrl:     product.ImageUrl,
		Specs:        product.Specs,
	}

	_, err := productCollection.InsertOne(ctx, newProduct)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating product"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Product created successfully", "data": newProduct})
}

// GetAllProducts - ดึงสินค้าทั้งหมด
func GetAllProducts(c *gin.Context) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var products []models.Product
	defer cancel()

	results, err := productCollection.Find(ctx, bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching products"})
		return
	}

	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleProduct models.Product
		if err = results.Decode(&singleProduct); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error decoding product"})
			return
		}
		products = append(products, singleProduct)
	}

	c.JSON(http.StatusOK, products)
}

// GetProductByID - ดึงสินค้าตาม ID
func GetProductByID(c *gin.Context) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	productId := c.Param("productId")
	var product models.Product
	defer cancel()

	// แปลง String เป็น ObjectID ของ Mongo
	objId, err := primitive.ObjectIDFromHex(productId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid product ID format"})
		return
	}

	err = productCollection.FindOne(ctx, bson.M{"_id": objId}).Decode(&product)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, product)
}
