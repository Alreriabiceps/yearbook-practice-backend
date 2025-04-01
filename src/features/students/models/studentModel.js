const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  courseMajor: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  personalQuote: { type: String },
  careerAspirations: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);