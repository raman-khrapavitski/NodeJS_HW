import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { googleConf } from './config';

passport.use(new GoogleStrategy({
  clientID: googleConf.GOOGLE_CLIENT_ID,
  clientSecret: googleConf.GOOGLE_CLIENT_SECRET,
  callbackURL: googleConf.CALLBACK_URL
},
  function (accessToken, refreshToken, profile, done) {
    if (profile.id === userDB.googleId) {
      console.log("Successfully authentication");
      return done(null, userDB);
    } else {
      console.log("Username or password is wrong!");
      return done(null, false, "Username or password is wrong!");
    }
  }
));
