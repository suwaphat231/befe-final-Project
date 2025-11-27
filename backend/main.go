package main

import (
	"os"

	"backend/configs"
	"backend/routes"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	router := gin.Default()

	configs.ConnectDB()

	routes.ProductRoutes(router)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	router.Run(":" + port)
}
