import express from 'express';
import sequelize from '../data/index';
import UserMongo from '../mongo/model/user';

const User = sequelize.import('../data/models/user');

const router = express.Router();

router.get('/', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    User.findAll().then(users => {
        response.json(users);
    });
});

router.delete('/:id', function (request, response) {
    UserMongo.findByIdAndRemove(request.params.id, function (error, user) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(user._id);
    });
});

export default router;
