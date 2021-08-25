const productsResolver = {
    Query: {
        productGet: (_,{}, {dataSources}) => dataSources.productAPI.productGet(),
        productById: (_,{IdProducto}, {dataSources}) => dataSources.productAPI.productById(IdProducto),
        productByName: (_,{nombreProducto}, {dataSources}) => dataSources.productAPI.productByName(nombreProducto),

//        products: (_, { userId }, {dataSources, userIdToken}) => {
  //          if(userId == userIdToken) 
    //            return dataSources.productAPI.productGet()
      //      else
        //        return null
        //}
    },
    Mutation: {
      /*  createProduct: (_, {product}, {dataSources, userIdToken}) => {
            return dataSources.productAPI.createProduct(product)
        }
        */
    }
};


module.exports = productsResolver;