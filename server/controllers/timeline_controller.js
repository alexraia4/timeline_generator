module.exports = {


    readOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const {tid} = req.params;
        dbInstance.timeline.read_timeline([tid])
        .then(timeline => res.status(200).send(timeline))
        .catch(err => console.log(err));
        
    },

    readAll: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = req.session.user.id;
        dbInstance.timeline.read_timelines([id])
        .then(timelines => res.status(200).send(timelines))
        .catch( err => console.log(err));
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, startDate, endDate} = req.body;
        const id = req.session.user.id;
        
        
        if (endDate) {
            dbInstance.timeline.create_timeline_with_end([name, id, startDate, endDate]);
        }
        else {
            dbInstance.timeline.create_timeline([name, id, startDate]);
        }
        
        return res.sendStatus(200);
        
        
    },

    update: (req, res) => {
        console.log("derp");
    },

    delete: (req, res) => {
        console.log("derp");
    }
};