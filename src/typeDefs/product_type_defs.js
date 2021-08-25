const { gql } = require('apollo-server');

const productTypeDefs = gql`
    type product {
        id: String!
        name: String
        description: String
        stock: Int
        price: String
        createAt: String
    }
    
    input ProductInput {
        name: String
        description: String
        stock: Int
        price: String
    }

    type Query {
        productGet: [product!]       
        productById (IdProducto: String!): [product]
        productByName (nombreProducto: String!): [product]
    }
    
    
    type Mutation {
        ProductCreate(product: ProductInput!): [product]
        productDeleteById(productId: String!): [product]
        productUpdateById(productId: String!, name: String, description: String, stock: Int, price: String): [product]

    }
`;

module.exports = productTypeDefs; 
