const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const doctorController = {
  createDoctor: async (req, res) => {
    try {
      const {
        email,
        password,
        name,
        phone,
        photo,
        ticketPrice,
        role,
        specialization,
        qualifications,
        experiences,
        bio,
        about,
        timeSlots,
      } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newDoctor = await prisma.doctor.create({
        data: {
          email,
          password: hashedPassword,
          name,
          phone,
          photo,
          ticketPrice,
          role,
          specialization,
          qualifications,
          experiences,
          bio,
          about,
          timeSlots,
        },
      });

      res.status(201).json({
        success: true,
        message: 'Doctor added successfully',
        data: newDoctor,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Failed to add doctor',
      });
    }
  },
};

const updateDoctor = async (req, res) => {
  const id = req.params.id;
  const { name, specialization, isApproved } = req.body;

  try {
    const result = await db.query(
      'UPDATE doctors SET name = $1, specialization = $2, is_approved = $3 WHERE id = $4 RETURNING *',
      [name, specialization, isApproved, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    const updatedDoctor = result.rows[0];

    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedDoctor,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update' });
  }
};
const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.query('DELETE FROM doctors WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to delete' });
  }
};
const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctorResult = await db.query('SELECT * FROM doctors WHERE id = $1', [id]);

    if (doctorResult.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    const doctor = doctorResult.rows[0];

    const appointmentsResult = await db.query('SELECT * FROM bookings WHERE doctor_id = $1', [id]);
    const appointments = appointmentsResult.rows;

    res.status(200).json({
      success: true,
      message: 'Doctor found',
      data: {
        ...doctor,
        appointments,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch doctor' });
  }
};
const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;

    let doctorsResult;
    if (query) {
      doctorsResult = await db.query(
        'SELECT * FROM doctors WHERE is_approved = $1 AND (name ILIKE $2 OR specialization ILIKE $2)',
        ['approved', `%${query}%`]
      );
    } else {
      doctorsResult = await db.query('SELECT * FROM doctors WHERE is_approved = $1', ['approved']);
    }

    const doctors = doctorsResult.rows;

    res.status(200).json({
      success: true,
      message: 'Doctors found',
      data: doctors,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch doctors' });
  }
};
const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId; // Assuming userId is set in req by authentication middleware

  try {
    const doctorResult = await db.query('SELECT * FROM doctors WHERE id = $1', [doctorId]);

    if (doctorResult.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    const doctor = doctorResult.rows[0];

    const appointmentsResult = await db.query('SELECT * FROM bookings WHERE doctor_id = $1', [doctorId]);
    const appointments = appointmentsResult.rows;

    res.status(200).json({
      success: true,
      message: 'Profile info retrieved successfully',
      data: {
        ...doctor,
        appointments,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch doctor profile' });
  }
};

module.exports = { doctorController, updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile };
