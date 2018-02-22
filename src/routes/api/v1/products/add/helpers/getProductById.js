const RequestPromise = require('request-promise');

const getProductByID = (productID) => {
  const options = {
    uri: `https://shop-social-product-api.herokuapp.com/products/${productID}`,
    json: true, // Automatically parses the JSON string in the response
  };
  return RequestPromise(options); // Returns a promise
};

module.exports = getProductByID;
