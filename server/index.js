require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require('express-session');
const auth_controller = require("./auth_controller.js");
const timeline_controller = require("./timeline_controller.js");

const app = express();

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("database connected");
})
.catch(err => console.log(err));


app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
    })
);

app.post("/auth/register", auth_controller.register);
app.post("/auth/login", auth_controller.login);
app.post("/auth/logout", auth_controller.logout);

app.get("/api/timeline/:id", timeline_controller.getOne);


app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`));