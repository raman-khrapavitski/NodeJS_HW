import express from 'express';
import jwt from 'jsonwebtoken';
import { config, userDB } from '../config/config';
import passport from 'passport';
import local from '../config/passport.local';
import facebook from '../config/passport.facebook';
import google from '../config/passport.google';
import twitter from '../config/passport.twitter';

const router = express.Router();

router.use(passport.initialize());

router.post('/', function (request, response) {
    let userToAuth = request.body;
    if (userDB.username !== userToAuth.username) {
        response.status(404).send({ code: 404, message: 'Not found', data: `User with username - ${userToAuth.username} not found` });
    } else {
        if (userDB.password !== userToAuth.password) {
            response.status(401).send({ code: 401, message: 'Unauthorized', data: `Wrong password` });
        } else {
            let token = jwt.sign({ username: userToAuth.username }, config.secret, { expiresIn: '1h' });
            response.status(200).send(token);
        }
    }
});

router.post('/local', passport.authenticate('local', { session: false }), function (request, response, next) {
    response.json({ username: request.user.username });
});

router.get('/facebook', passport.authenticate('facebook', { session: false }));

router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), function (error, user, info) {
    if (error) {
        response.code(500).send(error.message);
    }
    response.code(200).send({ user: user, info: info });
});

router.get('/twitter',
    passport.authenticate('twitter'));

router.get('/twitter/callback',
    passport.authenticate('twitter', { session: false }),
    function (req, res) {
        res.redirect('/');
    });

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
    passport.authenticate('google'),
    function (req, res) {

        res.redirect('/');
    });

export default router;
