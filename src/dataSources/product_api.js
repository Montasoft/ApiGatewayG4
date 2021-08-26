const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;    
  }

  async productGet(){
    return await this.get(`/product/`);    
  }

  async productById(IdProducto){
    return await this.get(`/product/${IdProducto}`);    
  }

  async productByName(nombreProducto){
    return await this.get(`/product/query?name=${nombreProducto}`);    
  }

  async productCreate(product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.post(`/product/`, product);    
  }

  async productDeleteById(IdProducto){
    return await this.delete(`/product/${IdProducto}`);    
  }

  async productUpDateById(IdProducto, name, description, stock, price){
    return await this.put(`/product/${IdProducto}`);    
  }
}

module.exports = ProductAPI;