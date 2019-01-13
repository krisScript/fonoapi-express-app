const fetch = require('node-fetch');
const path = require('path');
module.exports = class Data {
  constructor(modelBrand,modelName) {
    this.modelBrand = modelBrand,
      this.modelName = modelName,
      this.API_TOKEN = 'Your Api Token',
      this.apiUrl = `https://fonoapi.freshpixl.com/v1/getdevice?brand=${this.modelBrand}&device=${this.modelName}&token=${this.API_TOKEN}`
  }
  async getData() {
   console.log(this.apiUrl)
    const response = await fetch(this.apiUrl);
    const responseData = await response.json()
    return responseData
  }

  
};
