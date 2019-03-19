import express from 'express';
import sequelize from '../data/index';

const User = sequelize.import('../data/models/user');

const router = express.Router();

router.get('/', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    User.findAll().then(users => {
        response.json(users);
    });
});

export default router;
