import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    guid: { type: String, required: true },
    age: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    lastModifiedDate: { type: Date, required: true }
});

userSchema.pre('save', function (next) {    
    this.lastModifiedDate = new Date();
    next();
});

userSchema.pre('update', function (next) {    
    this.lastModifiedDate = new Date();
    next();
});

const User = mongoose.model('User', userSchema, 'users');

export default User;
