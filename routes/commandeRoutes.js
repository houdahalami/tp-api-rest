const express = require('express');
const router  = express.Router();
const { getAllCommandes, getCommandeById, createCommande, updateCommande, deleteCommande } = require('../controllers/commandeController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, authorize('commandes', 'read'),    getAllCommandes)
  .post(protect, authorize('commandes', 'create'), createCommande);

router.route('/:id')
  .get(protect, authorize('commandes', 'read'),     getCommandeById)
  .put(protect, authorize('commandes', 'update'),   updateCommande)
  .delete(protect, authorize('commandes', 'delete'), deleteCommande);

module.exports = router;
