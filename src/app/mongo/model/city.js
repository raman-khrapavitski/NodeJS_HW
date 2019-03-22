import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    country: { type: String, required: true, minlength: 1, maxlength: 50 },
    capital: { type: Boolean, required: true },
    location: {
        lat: { type: Number, required: true, min: -90, max: 90 },
        long: { type: Number, required: true, min: -180, max: 180 }
    },
    lastModifiedDate: { type: Date, required: true }
});

citySchema.pre('save', function (next) {    
    this.lastModifiedDate = new Date();
    next();
});

citySchema.pre('update', function (next) {    
    this.lastModifiedDate = new Date();
    next();
});

const City = mongoose.model('City', citySchema, 'cities');

export default City;
