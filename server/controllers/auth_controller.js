const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        let {username, password} = req.body;
        const db = req.app.get("db");
        
        let result = await db.auth.get_user([username]);
        let existingUser = result[0];
        
        if (existingUser) {
            return res.status(409).send('Username taken');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.auth.create_user(username, hash);
        const user = registeredUser[0];
        req.session.user = {username: user.user_name, id: user.tool_user_id}
        return res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const foundUser = await req.app.get('db').auth.read_user([username]);
        const user = foundUser[0];
        if (!user) {
          return res.status(401).send('User not found');
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        if (!isAuthenticated) {
          return res.status(403).send('wrong password bro');
        }
        req.session.user = {username: user.user_name, id: user.tool_user_id}
        return res.status(201).send(req.session.user);
    },

    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    },

    update: (req, res) => {
        const { username, password, uid} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = req.app.get('db').auth.update_user([username, hash, uid]);
        const user = registeredUser[0];
        req.session.user = {username: user.user_name, id: user.tool_user_id}
        return res.status(201).send(req.session.user);
    },

    delete: (req, res) => {
        const {uid} = req.body;
        this.logout;
        req.app.get('db').auth.delete_user([uid]);
        return res.sendStatus(200);
    }

}