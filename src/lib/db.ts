import dbConfig from '../config/db.config.js';
import { connect } from 'mongoose';

export async function databaseConnect() {
    if (!dbConfig.uri) {
        throw new Error('MongoDB URI is not available');
    }
    try {
        await connect(dbConfig.uri, dbConfig.options);
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed', err);
        process.exit(1);
    }
}
