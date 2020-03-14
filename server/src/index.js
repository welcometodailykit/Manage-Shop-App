const path = require('path')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const schema = require('./schema')

const app = express()

app.use(express.static(path.join(__dirname, '/../../client/build')))

const server = new ApolloServer({ schema })

server.applyMiddleware({ app })

app.listen({ port: 3000 }, () =>
   console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
)
