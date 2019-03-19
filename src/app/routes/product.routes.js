import express from 'express';
import sequelize from '../data/index';

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

router.get('/:productId', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    Product.findByPk(request.params.productId).then(product => {
        console.log(`Founded product - ${product}`)
        response.json(product);
    });
});

router.get('/:productId/reviews', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    Review.findAll({where: {productId: request.params.productId}}).then(reviews => {
        console.log(`Founded reviews - ${reviews}`)
        response.json(reviews);
    });    
});

export default router;
