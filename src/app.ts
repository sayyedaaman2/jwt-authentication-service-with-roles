import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import serverConfig from './config/server.config.js';
function startServer() {
    const app = express();

    //middlewares
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());

    app.get('/test', (req, res) => {
        res.status(200).send('Testing API');
    });

    app.listen(serverConfig.PORT, () => {
        console.log(`Server is running on port : ${serverConfig.PORT}`);
    });
}
startServer();
