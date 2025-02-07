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

        // const service = new UserService();
        // // const newToken = service.createToken({email:'puru@admin.com' , id:1});
        // // console.log("new token is " , newToken);
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InB1cnVAYWRtaW4uY29tIiwiaWQiOjEsImlhdCI6MTczODk0NzI5NywiZXhwIjoxNzM4OTUwODk3fQ.xbgl2JTmqg20fMtotPrm7AZhei0FbYHRSKtUcfIZfPE";
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer();