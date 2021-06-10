require("dotenv").config();

const cors                = require("cors")
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
// app.use(cors({
//     credentials: true
// }));
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000*60*24*60
        }
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("database connected");
})
.catch(err => console.log(err));




app.post(   "/auth/create"          ,                                          auth_controller.create);
app.post(   "/auth/login"           ,                                          auth_controller.login);
app.get(    "/auth/logout"          , auth.usersOnly,                          auth_controller.logout);
app.put(    "/auth/update"          , auth.usersOnly,                          auth_controller.update);
app.delete( "/auth/delete"          , auth.usersOnly,                          auth_controller.delete);

app.post(   "/timeline/create"      , auth.usersOnly,                          timeline_controller.create);
app.get(    "/timeline/readone/:tid", auth.usersOnly, auth.doIownThisTimeline, timeline_controller.readOne);
app.get(    "/timeline/readall"     , auth.usersOnly,                          timeline_controller.readAll);
app.put(    "/timeline/update/:tid" , auth.usersOnly, /*auth.doIownThisTimeline,*/ timeline_controller.update);
app.delete( "/timeline/delete/:tid" , auth.usersOnly, auth.doIownThisTimeline, timeline_controller.delete);

app.post(   "/event/create/:tid"    , auth.usersOnly, auth.doIownThisTimeline, event_controller.create);
app.get(    "/event/readone/:eid"   , auth.usersOnly, auth.doIownThisEvent   , event_controller.readOne);
app.get(    "/event/readall/:tid"   , auth.usersOnly, auth.doIownThisTimeline, event_controller.readAll);
//app.put(    "/event/update/:eid"    , auth.usersOnly, auth.doIownThisEvent   , event_controller.update);
//app.delete( "/event/delete/:eid"    , auth.usersOnly, auth.doIownThisEvent   , event_controller.delete);


app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`));