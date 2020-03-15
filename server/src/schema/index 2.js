const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

const { types: Recipe, resolvers: RecipeResolvers } = require('./recipe')

const Queries = require('./queries')
const Mutations = require('./mutations')

module.exports = makeExecutableSchema({
   typeDefs: [Recipe, Queries, Mutations],
   resolvers: merge(RecipeResolvers),
})
