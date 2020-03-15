const { gql } = require('apollo-server-express')

module.exports = gql`
  
   type Collection {
      id: ID!
      name: String!
      priority: Int
      categories: [Category!]!
      active: Boolean!
   }
   type Category {
      id: ID!
      name: Label!
      products: [Product]!
      subcategories: [SubCategory]!
   }
   type SubCategory {
      id: ID!
      name: Label!
      products: [Product!]!
   }
   type Label {
      name: String!
   }
   input CreateCollectionInput {
      name: String!
   }
   input UpdateCollectionInput {
      priority: Int
      categories: [Category!]!
      active: Boolean!
   }
`