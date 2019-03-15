import express from 'express';
import { users } from '../models/users';

const router = express.Router();

router.get('/', function (request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    response.json(users);
});

export default router;
