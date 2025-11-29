package models

import (
	"time"
)

type Product struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	Name         string    `json:"name"`
	Brand        string    `json:"brand"`
	Category     string    `json:"category"`
	Description  string    `json:"description"`
	Price        float64   `json:"price"`
	CountInStock int       `json:"countInStock" gorm:"column:count_in_stock"`
	ImageURL     string    `json:"imageUrl" gorm:"column:image_url"`
	CreatedAt    time.Time `json:"createdAt" gorm:"column:created_at"`
	UpdatedAt    time.Time `json:"updatedAt" gorm:"column:updated_at"`
}

func (Product) TableName() string {
	return "products"
}
