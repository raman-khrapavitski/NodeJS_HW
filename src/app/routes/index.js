import express from 'express';
import products from './product.routes';
import users from './user.routes';

const router = express.Router();

router.use('/api/products', products);
router.use('/api/users', users);

export default router;
