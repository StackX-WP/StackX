const db = require('../models/models');

const controller = {};

controller.getAllShoes = (req, res, next) => {
  const query = 'SELECT * from product'
  console.log(req.query)
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

controller.getShoesByBrand = (req, res, next) => {
  const values = [req.params.brand];
  const query = 'SELECT * from product p WHERE p.brand = $1'
  db.query(query, values)
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch(() => {
      const err = {
        log: 'Failed to get shoes by brand from internal api',
        message: { err: 'An error occurred' },}
    })
}

controller.getShoeById = (req, res, next) => {
  const values = [req.params.id];
  const query = 'SELECT * from product p WHERE p.productid = $1'
  db.query(query, values)
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch(() => {
      const err = {
        log: 'Failed to get shoes by brand from internal api',
        message: { err: 'An error occurred' },}
    })
}


module.exports = controller;

