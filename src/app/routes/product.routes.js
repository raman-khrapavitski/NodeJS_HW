import express from 'express';
import sequelize from '../data/index';
import ProductMongo from '../mongo/model/product';

const Product = sequelize.import('../data/models/product');
const Review = sequelize.import('../data/models/review');

const router = express.Router();

router.route('/')
    .get(function (request, response) {
        console.log("Cookies: ", request.parsedCookies);
        console.log("Query: ", request.parsedQuery);
        Product.findAll().then(products => {
            console.log(`Founded products - ${products}`)
            response.json(products);
        });
    })
    .post(function (request, response) {
        console.log("Cookies: ", request.parsedCookies);
        console.log("Query: ", request.parsedQuery);
        let newProduct = request.body;
        Product.create(newProduct).then(() => {
            console.log(`Proudct with id - ${newProduct.guid} created`);
            response.json(newProduct.guid);
        })
    });

router.route('/:productId')
    .get(function (request, response) {
        console.log("Cookies: ", request.parsedCookies);
        console.log("Query: ", request.parsedQuery);
        Product.findByPk(request.params.productId).then(product => {
            console.log(`Founded product - ${product}`)
            response.json(product);
        });
    }).delete(function (request, response) {
        ProductMongo.findByIdAndRemove(request.params.id, function (error, product) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            response.json(product._id);
        });
    });

router.get('/:productId/reviews', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    Review.findAll({ where: { productId: request.params.productId } }).then(reviews => {
        console.log(`Founded reviews - ${reviews}`)
        response.json(reviews);
    });
});

export default router;
