import express from 'express';
import { products } from '../models/products';
import { reviews } from '../models/reviews';

const router = express.Router();

router.route('/')
    .get(function (request, response) {
        console.log("Cookies: ", request.parsedCookies);
        console.log("Query: ", request.parsedQuery);
        response.json(products);
    })
    .post(function (request, response) {
        console.log("Cookies: ", request.parsedCookies);
        console.log("Query: ", request.parsedQuery);
        let newProduct = request.body;
        products.push(newProduct);
        response.json(newProduct.guid);
    });

router.get('/:productId', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    response.json(products.find((product) => product.guid === request.params.productId));
});

router.get('/:productId/reviews', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    response.json(reviews.filter((review) => review.productId === request.params.productId));
});

export default router;
