import type { ConnectOptions } from 'mongoose';

export interface DatabaseConfig {
    uri?: string;
    options?: ConnectOptions;
}

const config: DatabaseConfig = {
    uri: process.env.MONGODB_URI,
    options: {
        maxConnecting: 1,
        connectTimeoutMS: 5000,
    },
};
export default config;
