module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, content, year, month, day, hour, second} = req.body;
        const tid = req.params.tid;
        dbInstance.event.create_event([name, tid, content, year, month, day, hour, second]);
        return res.sendStatus(200);
    },
    
    readOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const eid = req.params.eid;
        dbInstance.event.read_event([eid])
        .then(event => res.status(200).send(event))
        .catch(err => console.log(err));
    },

    readAll: (req, res) => {
        const dbInstance = req.app.get('db');
        const tid = req.params.tid;
        dbInstance.event.read_events([tid])
        .then(events => res.status(200).send(events))
        .catch(err => console.log(err));
    }, 

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, tid, content, year, month, day, hour, second} = req.body;
        const eid = req.params.eid;
        dbInstance.event.update_event([name, tid, content, year, month, day, hour, second, eid]);
        return res.status(200).send("Updated!!");
    },

    delete: (req, res) => {
        req.app.get('db').timeline.delete_event([req.params.tid]);
        return res.sendStatus(200);
    },

    
}