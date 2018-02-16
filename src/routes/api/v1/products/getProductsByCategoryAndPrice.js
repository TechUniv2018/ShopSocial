const RequestPromise = require('request-promise');

const getProductsByCategoryAndPrice = (filterObject) => {
  const queryUrl = `https://shop-social-product-api.herokuapp.com/products/?category.name=${filterObject.productCategory}&manufacturer[$like]=*${filterObject.productBrand}*&price[$gt]=${filterObject.priceFrom}&price[$lt]=${filterObject.priceTo}`;
  const options = {
    uri: queryUrl,
    json: true, // Automatically parses the JSON string in the response
  };
  return RequestPromise(options);
};

module.exports = getProductsByCategoryAndPrice;
