const express = require('express');
const cors = require('cors');
const path = require('path');
var engine = require('consolidate');

class Server {

    constructor() {
        this.app = express();
        this.routes();
        this.middlewares();
    }

    middlewares() {
        this.app.set('views', path.join(__dirname, '../public/dist/weatherApp'));
        this.app.use(express.static( path.join(__dirname, '../public/dist/weatherApp') ));
        this.app.set('view engine', 'html');
        this.app.engine('html', engine.mustache);
        this.app.use( cors() );
    }

    routes() {
        this.app.use('/', require('../routes/server'));
    }

    listen() {
        this.app.listen(8080, () => {
            console.log('Server running at port 8080');
        })
    }

}

module.exports = Server;