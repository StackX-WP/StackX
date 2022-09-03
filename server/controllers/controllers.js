const db = require('../models/models');

const controller = {};

controller.getAllShoes = (req, res, next) => {
  const query = 'SELECT * from product'
  db.query(query)
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch(() => {
      const err = {
        log: 'Failed to get shoes from internal api',
        message: { err: 'An error occurred' },}
    })
}


module.exports = controller;

