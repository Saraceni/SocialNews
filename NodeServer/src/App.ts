"use strict";

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import AllSourcesApiController from './controllers/AllSourcesApiController';

export class App {

    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(cors({
            origin: function(origin, callback) {
                callback(null, true);
            },
            credentials: true
        }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(path.join(__dirname, '../../client/dist')));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let api = express.Router();

        let allSourcesApiController = new AllSourcesApiController();
        api.get('/all', allSourcesApiController.search.bind(allSourcesApiController));

        // Set our api routes
        this.express.use('/api', api);

        // Catch all other routes and return the index file
        this.express.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
        });
    }

}

export default new App().express;