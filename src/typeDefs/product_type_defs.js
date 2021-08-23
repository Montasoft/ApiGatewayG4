const { gql } = require('apollo-server');

const productTypeDefs = gql`
    type product {
        id: String!
        name: String
        description: String
        stock: Int
        price: String
    }
    
    input ProductInput {
        name: String
        description: String
        stock: Int
        price: String
    }

    type Query {
        products: [product!]       
    }

    type Query{
        productById (id: String!): [product]
    }
    
    
    type Mutation {
        createProduct(product: ProductInput!): [product]
    }
`;

module.exports = productTypeDefs; 
