const { getDescription } = require("graphql");

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
      productCreate: (_, {product}, {dataSources, userIdToken}) => {return dataSources.productAPI.productCreate(product)},
      productDeleteById: (_, {IdProducto}, {dataSources, userIdToken}) => {return dataSources.productAPI.ProductDeleteById(IdProducto)},
      productUpDateById: (_,{IdProducto, NameProduct, description, stock, price}, {dataSources})=>{
        const product  ={}
        if (!product){
          throw new Error(`No se pudo encontrar el producto con el Id: ${IdProducto}`);    
        }
        return dataSources.productAPI.productUpDateById(IdProducto, NameProduct, description, stock, price)
        
      },
    },
};


module.exports = productsResolver;