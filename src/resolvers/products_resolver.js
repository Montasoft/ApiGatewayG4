const productsResolver = {
    Query: {
        products: (_, { userId }, {dataSources, userIdToken}) => {
            if(userId == userIdToken) 
                return dataSources.productAPI.productGet()
            else
                return null
        }
    },
    Mutation: {
        createProduct: (_, {product}, {dataSources, userIdToken}) => {
            return dataSources.productAPI.createProduct(product)
        }
        
    }
};


module.exports = productsResolver;