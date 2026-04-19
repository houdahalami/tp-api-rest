const express = require('express');
const router  = express.Router();
const {
  getAllProduits,
  getProduitById,
  createProduit,
  updateProduit,
  deleteProduit,
} = require('../controllers/produitController');

router.route('/')
  .get(getAllProduits)
  .post(createProduit);

router.route('/:id')
  .get(getProduitById)
  .put(updateProduit)
  .delete(deleteProduit);

module.exports = router;
