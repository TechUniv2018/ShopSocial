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
      response({ statusCode: 200 });
    },
  },
];
