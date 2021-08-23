const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;    
  }

  async productGet(userId){
    return await this.get(`/product/`);    
  }

  
  async productById(Id){
    return await this.get(`/product/${Id}`);    
  }

 
  async productByName(product){
    return await this.get(`/product/query?name=${nombreProducto}`);    
  }

  
  async productCreate(product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.put(`/product/`, product);    
  }


  async productDeleteById(Id){
    return await this.delete(`/product/${Id}`);    
  }


}

module.exports = ProductAPI;