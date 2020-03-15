const { gql } = require('apollo-server-express')

module.exports = gql`

   type Mutation {
      createProduct(input: CreateProductInput): Product!
      updateProduct(input: UpdateProductInput): Product!
      deleteProduct(id: ID!): Product!
      createCollection(input: CreateCollectionInput): Collection!
      updateCollection(input: UpdateCollectionInput): Collection!
      deleteCollection(id: ID!): Collection!
      createMenu(input: CreateMenuInput): Menu!
      updateMenu(input: UpdateProductInput): Menu!
   }
`
