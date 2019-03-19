export const config = {
    secret: "secret"
}

export const userDB = {
    username: "admin",
    password: "password",
    googleId: "",
    twiiterId: "",
    facebookId: ""
}

export const facebookConf = {
    FACEBOOK_APP_ID: "test",
    FACEBOOK_APP_SECRET: "test",
    CALLBACK_URL: "http://localhost:8000/auth/facebook/callback"
}

export const twitterConf = {
    TWITTER_CONSUMER_KEY: "test",
    TWITTER_CONSUMER_SECRET: "test",
    CALLBACK_URL: "http://localhost:8000/auth/twitter/callback"
}

export const googleConf = {
    GOOGLE_CLIENT_ID: "test",
    GOOGLE_CLIENT_SECRET: "test",
    CALLBACK_URL: "http://localhost:8000/auth/google/callback"
}
