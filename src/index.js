const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/srverconfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');
const {User,Role} = require('./models/index')

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
        if (process.env.DB_SYNC) {
            db.sequelize.sync({alert: true});
        }

        const u1 = await User.findByPk(4);
        const r1 = await Role.findByPk(1);
        // u1.addRole(r1);
        const response = await u1.hasRole(r1);
        console.log(response);

        // const service = new Use
    });
}

prepareAndStartServer();