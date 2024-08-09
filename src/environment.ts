export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/',
  product: function () {
    return this.apiUrl + 'products';
  }
};
