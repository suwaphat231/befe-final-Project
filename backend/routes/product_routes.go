package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func ProductRoutes(router *gin.Engine) {
	product := router.Group("/products")
	{
		product.POST("/", controllers.CreateProduct)
		product.GET("/", controllers.GetAllProducts)
		product.GET("/:productId", controllers.GetProductByID)
		product.PUT("/:productId", controllers.UpdateProduct)
		product.DELETE("/:productId", controllers.DeleteProduct)
	}
}
