const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

const { authenticate, restrict } = require('../auth/verifyToken.js');
const {
  deleteUser,
  getAllUser,
  getMyAppointments,
  getSingleUser,
  getUserProfile,
  updateUser,
} = require('../controller/user.js');

router.get('/:id', authenticate, restrict(['patient']), getSingleUser);
router.get('/', authenticate, restrict(['admin']), getAllUser);
router.put('/:id', authenticate, restrict(['patient']), updateUser);
router.delete('/:id', authenticate, restrict(['patient']), deleteUser);
router.get('/:profile/me', authenticate, restrict(['patient']), getUserProfile);
router.get('/appointments/my-appointments', authenticate, restrict(['patient']), getMyAppointments);

module.exports = router;
