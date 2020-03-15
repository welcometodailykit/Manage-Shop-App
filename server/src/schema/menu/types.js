const { gql } = require('apollo-server-express')

module.exports = gql`
   type Menu {
      id: ID!
      menuCollections: [MenuCollection!]!
   }

   type MenuCollection {
      id: ID!
      collection: Collection!
      availabilty: Availabilty!
   }

   type Availabilty {
      includeRange: IncludeRange!
      excludeRange: [CustomRange]!
   }

   type IncludeRange {
      recurring: [RecurringRange]!
      customRange: [CustomRange]!
   }

   type CustomRange {
      startDate: String!
      endDate: String!
      startTime: String!
      endTime: String!
   }
   
   type RecurringRange {
      startDate: String!
      endDate: String!
      day: [String!]!
      startTime: String!
      endTime: String!
   }
`