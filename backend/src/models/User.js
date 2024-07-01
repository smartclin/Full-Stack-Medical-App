// src/models/User.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class User {
  static async create({ username, password, name, phone, photo, role, gender, bloodType }) {
    try {
      const user = await prisma.user.create({
        data: {
          username,
          password,
          name,
          phone,
          photo,
          role,
          gender,
          bloodType,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async findByUsername(username) {
    try {
      const user = await prisma.user.findUnique({
        where: { username },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const user = await prisma.user.delete({
        where: { id: parseInt(id) },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
