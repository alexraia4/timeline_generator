module.exports = {


    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.read_timeline()
        .then(timeline => {
            res.status(200).send(timeline);
        })
        .catch( err => {
            console.log(err)
        });
    }


};