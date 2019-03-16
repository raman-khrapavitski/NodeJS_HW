import passport from 'passport';
import LocalStrategy from 'passport-local';
import { userDB } from './config';

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    const user = userDB.username === username ? userDB : false;
    done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
}, function (username, password, done) {
    if (username === userDB.username && password === userDB.password) {
        console.log("Successfully authentication");
        return done(null, userDB);
    } else {
        console.log("Username or password is wrong!");
        return done(null, false, "Username or password is wrong!");
    }
}));
