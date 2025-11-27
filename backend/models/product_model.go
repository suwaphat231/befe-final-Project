package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Product struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name         string             `bson:"name,omitempty" json:"name" binding:"required"`
	Brand        string             `bson:"brand,omitempty" json:"brand" binding:"required"`
	Category     string             `bson:"category,omitempty" json:"category" binding:"required"`
	Description  string             `bson:"description,omitempty" json:"description"`
	Price        float64            `bson:"price,omitempty" json:"price" binding:"required"`
	CountInStock int                `bson:"countInStock,omitempty" json:"countInStock"`
	ImageUrl     string             `bson:"imageUrl,omitempty" json:"imageUrl"`

	Specs map[string]string `bson:"specs,omitempty" json:"specs"`
}
