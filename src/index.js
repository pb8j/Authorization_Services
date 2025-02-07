const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/srverconfig');
const apiRoutes = require('./routes/index');

const UserService = require('./services/user-service');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');
const UserRepository = require("./repository/user-repository");
const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        // const service = new Use
    });
}

prepareAndStartServer();