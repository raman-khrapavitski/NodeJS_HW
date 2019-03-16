import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export default function (request, response, next) {
    let token = request.headers['x-access-token'] || request.headers['authorization'];

    if (!token) {
        response.status(403).send({ success: false, message: 'There is no token' });
    }
    jwt.verify(token, config.secret, function (error, decoded) {
        if (error) {
            response.status(401).send({ success: false, message: 'Failed to authenticate token' });
        } else {
            next();
        }
    })
}
