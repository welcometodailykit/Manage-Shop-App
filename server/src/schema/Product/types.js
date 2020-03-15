const { gql } = require('apollo-server-express')

module.exports = gql`
   
   type Product {
      id: ID!
      productName: String!
      productItems: [ProductItem!]!
      deliveryModes: DeliveryModes! 
   }
   type ProductItem {
      id: ID!
      itemLabel: String!
      defaultRecipe: Recipe!
      defaultState: DefaultState!
      recipeOptions: [Recipe!]! 
   }
   type Recipe {
      id: ID!
      mealKitServings: [MealKitServing!]!
      readyToEatServings: [ReadyToEatServing!]!
      accompaniants: [Accompanient]!
   }
   type Accompanient {
      label: String!
      accompanientItem: [AccompanientItem!]!
   }
   type AccompanientItem {
      id: Product!
      discount: Int!
   }
   type MealKitServing {
      id: ID!
      salesPrice: Int!
      discount: Discount!
   }
   type ReadyToEatServing {
      id: ID!
      salesPrice: Int!
      discount: Discount!
   }
   type Discount {
      active: Boolean!
      price: Int!
   }
   type DeliveryModes {
      onDemand: DeliveryMode!
      pickup: DeliveryMode!
      preOrder: DeliveryMode!
   }
   type DeliveryMode {
      active: Boolean!
      timeRange: Int!
   }
   enum DefaultState {
      ReadyToEat
      MealKit
   }
   input CreateProductInput {
      productName: String!
   }
   input UpdateProductInput {
      productItems: [ProductItem!]!
      deliveryModes: DeliveryModes! 
   }
`