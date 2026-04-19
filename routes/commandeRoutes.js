const express = require('express');
const router  = express.Router();
const {
  getAllCommandes,
  getCommandeById,
  createCommande,
  updateCommande,
  deleteCommande,
} = require('../controllers/commandeController');

router.route('/')
  .get(getAllCommandes)
  .post(createCommande);

router.route('/:id')
  .get(getCommandeById)
  .put(updateCommande)
  .delete(deleteCommande);

module.exports = router;
