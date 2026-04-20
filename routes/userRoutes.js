const express = require('express');
const router  = express.Router();
const { getAllUsers, getUserById, updateUserRole } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/',     protect, getAllUsers);
router.get('/:id',  protect, getUserById);
router.put('/:id/role', protect, updateUserRole);

module.exports = router;
