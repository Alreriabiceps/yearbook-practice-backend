const Student = require('../models/studentModel');

// Fetch all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
};

// Fetch a single student by ID
const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error: error.message });
  }
};

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { firstName, middleName, lastName, courseMajor, studentId, personalQuote, careerAspirations } = req.body;

    const newStudent = new Student({
      firstName,
      middleName,
      lastName,
      courseMajor,
      studentId,
      personalQuote,
      careerAspirations,
    });

    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  }
};

// Update a student
const updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const updatedData = req.body;

    const updatedStudent = await Student.findOneAndUpdate({ studentId }, updatedData, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error: error.message });
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const deletedStudent = await Student.findOneAndDelete({ studentId });
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
};

module.exports = { getStudents, getStudentById, addStudent, updateStudent, deleteStudent };