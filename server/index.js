require("dotenv").config();

const massive             = require("massive");
const express             = require("express");
const session             = require('express-session');
const auth                = require("./middleware/authMiddleware.js");
const auth_controller     = require("./controllers/auth_controller.js");
const timeline_controller = require("./controllers/timeline_controller.js");
const event_controller    = require("./controllers/event_controller.js");

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

app.post("/auth/register",                                                      auth_controller.register);
app.post("/auth/login",                                                         auth_controller.login);
app.post("/auth/logout",               auth.usersOnly,                          auth_controller.logout);
app.put("/auth/edituser/:uid",         auth.usersOnly, auth.isThisMe,           auth_controller.update);
app.delete("/auth/delete/:uid",        auth.usersOnly, auth.isThisMe,           auth_controller.delete);

app.post("/api/newtimeline",           auth.usersOnly,                          timeline_controller.create);
app.get("/api/timeline/:tid",          auth.usersOnly, auth.doIownThisTimeline, timeline_controller.readOne);
app.get("/api/timelines",              auth.usersOnly,                          timeline_controller.readAll);
app.put("/api/edittimeline/:tid",      auth.usersOnly, auth.doIownThisTimeline, timeline_controller.update);
app.delete("/api/deletetimeline/:tid", auth.usersOnly, auth.doIownThisTimeline, timeline_controller.delete);

app.post("/api/newevent",              auth.usersOnly,                          event_controller.create);
app.get("/api/event/:eid",             auth.usersOnly, auth.doIownThisEvent,    event_controller.readOne);
app.get("/api/events/:tid",            auth.usersOnly, auth.doIownThisTimeline, event_controller.readAll);
app.put("/api/editevent/:id",          auth.usersOnly, auth.doIownThisEvent,    event_controller.update);
app.delete("/api/deleteevent/:id",     auth.usersOnly, auth.doIownThisEvent,    event_controller.delete);


app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`));