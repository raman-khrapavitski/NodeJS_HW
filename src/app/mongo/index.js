import mongoose from 'mongoose';
import { mongoConfig } from './mongo.config';

mongoose.connect(`mongodb://${mongoConfig.host}/${mongoConfig.database}`);

const db = mongoose.connection;

db.on('error', () => {
    console.log('Connection to database error')
});

db.once('open', () => {
    console.log(`Connected to mongo database - ${mongoConfig.database}`);
});

export default db;
