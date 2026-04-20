const express = require('express');
const router  = express.Router();
const { getAllRoles, getRoleById, createRole, updateRole, deleteRole } = require('../controllers/roleController');

router.route('/')
  .get(getAllRoles)
  .post(createRole);

router.route('/:id')
  .get(getRoleById)
  .put(updateRole)
  .delete(deleteRole);

module.exports = router;
