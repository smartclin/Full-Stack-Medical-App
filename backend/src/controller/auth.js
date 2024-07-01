const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d',
  });
};

const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    // Verificar si el usuario ya existe
    let user = null;
    if (role == 'patient') {
      user = await User.findOne({ email });
    } else if (role == 'doctor') {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Crear el usuario según el rol
    if (role === 'patient') {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    } else if (role === 'doctor') {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res.status(200).json({ success: true, message: 'User successfully created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error, Try again' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por su correo electrónico
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Comparar la contraseña
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: 'Invalid Credentials' });
    }

    // Obtener el token
    const token = generateToken(user);

    // Excluir campos sensibles del objeto del usuario
    const { password: userPassword, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: 'Successfully logged in',
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    //console.error(err);
    res.status(500).json({ status: false, message: 'Failed to login' });
  }
};
module.exports = { register, login };
