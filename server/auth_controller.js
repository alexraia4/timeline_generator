const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        let {username, password} = req.body;
        const db = req.app.get("db");
        
        let result = await db.get_user([username]);
        let existingUser = result[0];
        
        if (existingUser) {
            return res.status(409).send('Username taken');
            
        }
        return res.sendStatus(200);
        
    },

    login: async (req, res) => {
        console.log("derp");
    },

    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }

}