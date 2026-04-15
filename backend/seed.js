const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');

dotenv.config();

const doctors = [
  {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    available_slots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM']
  },
  {
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    available_slots: ['09:30 AM', '10:30 AM', '11:30 AM', '03:00 PM']
  },
  {
    name: 'Dr. Mike Wilson',
    specialization: 'Pediatrician',
    available_slots: ['10:00 AM', '11:00 AM', '12:00 PM', '04:00 PM']
  }
];

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Doctor.deleteMany(); // Clear existing
    await Doctor.insertMany(doctors);
    console.log('Doctors Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding doctors:', error);
    process.exit(1);
  }
};

seedDoctors();
