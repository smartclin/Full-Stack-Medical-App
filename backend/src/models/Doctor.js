// src/models/Doctor.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Doctor {
  static async create({ name, phone, photo, specialty }) {
    try {
      const doctor = await prisma.doctor.create({
        data: {
          name,
          phone,
          photo,
          specialty,
        },
      });
      return doctor;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, { name, phone, photo, specialty }) {
    try {
      const doctor = await prisma.doctor.update({
        where: { id: parseInt(id) },
        data: {
          name,
          phone,
          photo,
          specialty,
        },
      });
      return doctor;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      await prisma.doctor.delete({
        where: { id: parseInt(id) },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async findAll() {
    try {
      const doctors = await prisma.doctor.findMany();
      return doctors;
    } catch (error) {
      throw error;
    }
  }

  static async findByPk(id) {
    try {
      const doctor = await prisma.doctor.findUnique({
        where: { id: parseInt(id) },
      });
      return doctor;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Doctor;
