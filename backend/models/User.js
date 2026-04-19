import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [30, 'Name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long']
    },
    category: {
        type: String,
        enum: ['Doctor', 'Lawyer', 'Expert', 'Other'],
        default: 'Other'
    },
    role: {
        type: String,
        enum: ['user', 'expert', 'admin'],
        default: 'user'
    },
    title: {
        type: String,
        default: '',
        maxlength: [50, 'Title cannot exceed 50 characters']
    },
    description: {
        type: String,
        default: '',
        maxlength: [300, 'Description cannot exceed 300 characters']
    },
    experience: {
        type: Number,
        default: 0,
        min: [0, 'Experience cannot be negative'],
        max: [50, 'Experience cannot exceed 50 years']
    },
    profileImage: {
        type: String,
        default: ''
    },
    isProfileComplete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
