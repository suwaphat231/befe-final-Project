package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func ProductRoutes(router *gin.Engine) {
	router.POST("/products", controllers.CreateProduct)
	router.GET("/products", controllers.GetAllProducts)
	router.GET("/products/:productId", controllers.GetProductByID)
}
