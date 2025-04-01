const express = require('express');
const { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

const router = express.Router();

// GET /api/students - Fetch all students
router.get('/students', getStudents);

// GET /api/students/:studentId - Fetch a single student by ID
router.get('/students/:studentId', getStudentById);

// POST /api/students - Add a new student
router.post('/students', addStudent);

// PUT /api/students/:studentId - Update a student
router.put('/students/:studentId', updateStudent);

// DELETE /api/students/:studentId - Delete a student
router.delete('/students/:studentId', deleteStudent);

module.exports = router;