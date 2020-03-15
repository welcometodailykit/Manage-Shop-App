const { gql } = require('apollo-server-express')

module.exports = gql`
   type Mutation {
      createRecipe(id: ID!): Recipe
   }
`
