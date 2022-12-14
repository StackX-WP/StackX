const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

router.get('/', 
  controller.getAllShoes,
  (req, res) => res.status(200).json(res.locals.data.rows)
);

router.get('/brands/:brand', 
  controller.getShoesByBrand,
  (req, res) => res.status(200).json(res.locals.data.rows)
);

router.get('/shoes/:id',
  controller.getShoeById,
  (req, res) => res.status(200).json(res.locals.data.rows[0])
);
module.exports = router;