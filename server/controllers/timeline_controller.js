module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, startDate, endDate} = req.body;
        const id = req.session.user.uid;
        dbInstance.timeline.create_timeline([name, id, startDate, endDate]);
        return res.sendStatus(200);
    },

    readOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const {tid} = req.params;
        dbInstance.timeline.read_timeline([tid])
        .then(timeline => res.status(200).send(timeline))
        .catch(err => console.log(err));
        
    },

    readAll: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log("read all", req.session);
        const uid = req.session.user.uid;
        dbInstance.timeline.read_timelines([uid])
        .then(timelines => res.status(200).send(timelines))
        .catch( err => console.log(err));
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, startDate, endDate} = req.body;
        const uid = req.session.user.uid;
        const tid = req.params.tid;
        dbInstance.timeline.update([name, uid, startDate, endDate, tid]);
        return res.status(200).send("Updated!!");
    },

    delete: (req, res) => {
        req.app.get('db').timeline.delete_timeline([req.params.tid]);
        return res.sendStatus(200);
    }
};