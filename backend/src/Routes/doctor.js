const router = require('express').Router();
const { authenticate, restrict } = require('../auth/verifyToken.js');
const {
  deleteDoctor,
  getAllDoctor,
  getDoctorProfile,
  getSingleDoctor,
  updateDoctor,
} = require('../controller/doctor.js');

const reviewRouter = require('./review.js');

//nested route
router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

module.exports = router;
