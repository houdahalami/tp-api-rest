const express = require('express');
const router  = express.Router();
const { getAllClients, getClientById, createClient, updateClient, deleteClient } = require('../controllers/clientController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, authorize('clients', 'read'),    getAllClients)
  .post(protect, authorize('clients', 'create'), createClient);

router.route('/:id')
  .get(protect, authorize('clients', 'read'),     getClientById)
  .put(protect, authorize('clients', 'update'),   updateClient)
  .delete(protect, authorize('clients', 'delete'), deleteClient);

module.exports = router;
