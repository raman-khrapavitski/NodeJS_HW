import express from 'express';
import products from './product.routes';
import users from './user.routes';
import auth from './auth.routes';
import city from './city.router';
import tokenValidator from '../middlewares/token.validator';

const router = express.Router();

router.use('/api/products', tokenValidator, products);
router.use('/api/users', tokenValidator, users);
router.use('/api/auth', auth);
router.use('/api/cities', city);

export default router;
