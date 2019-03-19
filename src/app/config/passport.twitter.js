import passport from 'passport';
import TwitterStrategy from 'passport-twitter';
import { twitterConf } from './config';

passport.use(new TwitterStrategy({
  consumerKey: twitterConf.TWITTER_CONSUMER_KEY,
  consumerSecret: twitterConf.TWITTER_CONSUMER_SECRET,
  callbackURL: twitterConf.CALLBACK_URL
},
  function (token, tokenSecret, profile, cb) {
    if (profile.id === userDB.twiiterId) {
      console.log("Successfully authentication");
      return done(null, userDB);
    } else {
      console.log("Username or password is wrong!");
      return done(null, false, "Username or password is wrong!");
    }
  }
));
