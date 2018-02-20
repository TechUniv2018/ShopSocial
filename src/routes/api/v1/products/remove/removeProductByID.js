const Models = require('../../../../../../models/');
const Joi = require('joi');

module.exports = [
  {
    method: 'DELETE',
    path: '/api/v1/products/remove/{productId?}',
    config: {
      validate: {
        params: {
          productId: Joi.number().positive().min(0).precision(0)
            .required(),
        },
      },
    },
    handler: (request, response) => {
      Models.ProductDetails.findOne({
        where: {
          productID: request.params.productId,
        },
      }).then((result) => {
        if (result === null) {
          throw new Error(`No Product with product id - ${request.params.productId} found in the db`);
        }
        Models.ProductDetails.destroy({
          where: {
            productID: request.params.productId,
          },
        }).then(() => {
          response({
            message: 'Product removed',
            statusCode: 200,
          });
        });
      }).catch((error) => {
        response({
          message: error.error.name,
          statusCode: 204,
        });
      });
    },
  },
];
