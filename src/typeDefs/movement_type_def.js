const { gql } = require('apollo-server');

const movementypeDefs = gql`
    type movement {
        id: String!
        userId: String
        productId: String
        movement: String
        quantity: Int
        dateMovement: String
    }
    
    input MovimentInput {
        userId: String
        productId: String
        movement: Int
        quantity: String
    }

    type Query {
        movementGet: [movement]       
        movementById (movementId: String!): [movement]
        movementByUserid (userId: String!): [movement]
    }
    
    
    type Mutation {
        MovementCreate(movement: movementInput!): [Movement]
        MovementDeleteById(movementID: String!): String

    }
`;

module.exports = productTypeDefs; 
