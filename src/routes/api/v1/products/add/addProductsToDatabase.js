const Models = require('../../../../../../models/');

const addProductsToDB = (productsArray) => {
  const dbInsertArray = [];
  if (productsArray.length === 0) {
    return null;
  }
  productsArray.forEach((product) => {
    const productObject = {
      productID: product.id,
      name: product.name,
      price: product.price,
      upc: product.upc,
      description: product.description,
      manufacturer: product.manufacturer,
      model: product.model,
      image: product.image,
      category: product.categories[0].name,
    };
    dbInsertArray.push(Models.ProductDetails.create(productObject));
  });
  return Promise.all(dbInsertArray);
};

module.exports = addProductsToDB;
