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
    FACEBOOK_APP_ID: "",
    FACEBOOK_APP_SECRET: "",
    CALLBACK_URL: "http://localhost:8000/auth/facebook/callback"
}

export const twitterConf = {
    TWITTER_CONSUMER_KEY: "",
    TWITTER_CONSUMER_SECRET: "",
    CALLBACK_URL: "http://localhost:8000/auth/twitter/callback"
}

export const googleConf = {
    TWITTER_CONSUMER_KEY: "",
    TWITTER_CONSUMER_SECRET: "",
    CALLBACK_URL: "http://localhost:8000/auth/google/callback"
}
