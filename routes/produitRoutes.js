const express = require('express');
const router  = express.Router();
const { getAllProduits, getProduitById, createProduit, updateProduit, deleteProduit } = require('../controllers/produitController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, authorize('produits', 'read'),    getAllProduits)
  .post(protect, authorize('produits', 'create'), createProduit);

router.route('/:id')
  .get(protect, authorize('produits', 'read'),     getProduitById)
  .put(protect, authorize('produits', 'update'),   updateProduit)
  .delete(protect, authorize('produits', 'delete'), deleteProduit);

module.exports = router;
