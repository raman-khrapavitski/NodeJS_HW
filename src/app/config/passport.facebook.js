import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import { facebookConf } from './config';

passport.use(new FacebookStrategy({
    clientID: facebookConf.FACEBOOK_APP_ID,
    clientSecret: facebookConf.FACEBOOK_APP_SECRET,
    callbackURL: facebookConf.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    if (profile.id === userDB.facebookId) {
      console.log("Successfully authentication");
      return done(null, userDB);
    } else {
      console.log("Username or password is wrong!");
      return done(null, false, "Username or password is wrong!");
    }
  }
));
