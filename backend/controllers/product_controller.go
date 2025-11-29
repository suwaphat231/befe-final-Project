package controllers

import (
	"backend/configs"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// CreateProduct - เพิ่มสินค้า
func CreateProduct(c *gin.Context) {
	var product models.Product

	// รับค่าจาก JSON
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// บันทึกลง PostgreSQL
	if err := configs.DB.Create(&product).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Product created successfully", "data": product})
}

// GetAllProducts - ดึงสินค้าทั้งหมด
func GetAllProducts(c *gin.Context) {
	var products []models.Product

	// ดึงข้อมูลทั้งหมด
	if err := configs.DB.Find(&products).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, products)
}

// GetProductByID - ดึงสินค้าตาม ID
func GetProductByID(c *gin.Context) {
	id := c.Param("productId")
	var product models.Product

	// ค้นหาตัวแรกที่เจอ ID ตรงกัน
	if err := configs.DB.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, product)
}

// UpdateProduct - แก้ไขสินค้า
func UpdateProduct(c *gin.Context) {
	id := c.Param("productId")
	var product models.Product

	// ค้นหาตัวแรกที่เจอ ID ตรงกัน
	if err := configs.DB.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	// รับค่าจาก JSON
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	configs.DB.Save(&product)
	c.JSON(http.StatusOK, gin.H{"message": "Product updated successfully", "data": product})
}

// DeleteProduct - ลบสินค้า
func DeleteProduct(c *gin.Context) {
	id := c.Param("productId")
	var product models.Product

	// ค้นหาตัวแรกที่เจอ ID ตรงกัน
	if err := configs.DB.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	configs.DB.Delete(&product)
	c.JSON(http.StatusOK, gin.H{"message": "Product deleted successfully"})
}
