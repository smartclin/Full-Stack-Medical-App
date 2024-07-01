const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update' });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to deleted' });
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select('-password');

    res.status(200).json({
      success: true,
      message: 'User found',
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: 'No user found' });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');

    res.status(200).json({
      success: true,
      message: 'Users found',
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: 'Not found' });
  }
};

const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: 'Profile info is getting',
      data: { ...rest },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
  }
};

const getMyAppointments = async (req, res) => {
  try {
    //step 1: retrieve appoinments from booking for specific user.
    const appointment = await Booking.find({ user: req.userId });

    //step 2: extract doctor ids from appointmnet bookings
    const doctorIds = bookings.map((el) => el.doctor.id);

    //step 3: retrieve doctors using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

    res.status(200).json({
      success: true,
      message: 'Appointments are getting',
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
  }
};

module.exports = { createUser, updateUser, deleteUser, getSingleUser, getAllUser, getUserProfile, getMyAppointments };
