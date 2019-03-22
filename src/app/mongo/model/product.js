import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    guid: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    price: { type: String, required: true },
    company: { type: String, required: true },
    about: { type: String, required: true },
    lastModifiedDate: { type: Date, required: true }
});

productSchema.pre('save', function (next) {    
    this.lastModifiedDate = new Date();
    next();
});

productSchema.pre('update', function (next) {    
    this.lastModifiedDate = new Date();
    next();
});

const Product = mongoose.model('Product', productSchema, 'products');

export default Product;
