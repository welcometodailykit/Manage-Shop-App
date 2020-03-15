const { gql } = require('apollo-server-express')

module.exports = gql`
   type Query {
      "all the products in the system"
      products: [Product]!
      "get product information by specifying a particular ID"
      product(id: ID!): Product!
      "get menu collection by specifying the ID"
      collection(id: ID!): Collection!

   }
`
