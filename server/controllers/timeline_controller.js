module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, startDate, endDate} = req.body;
        const id = req.session.user.uid;
        if (endDate) {
            dbInstance.timeline.create_timeline_with_end([name, id, startDate, endDate]);
        }
        else {
            dbInstance.timeline.create_timeline([name, id, startDate]);
        }
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
        if (endDate) {
            dbInstance.timeline.update_timeline_with_end([name, uid, startDate, endDate, tid]);
        }
        else {
            dbInstance.timeline.update_timeline([name, uid, startDate, tid]);
        }
        return res.status(200).send("Updated!!");
    },

    delete: (req, res) => {
        req.app.get('db').timeline.delete_timeline([req.params.tid]);
        return res.sendStatus(200);
    }
};