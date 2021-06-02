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
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.create_user(username, hash);
        const user = registeredUser[0];
        req.session.user = {username: user.user_name, id: user.tool_user_id}
        return res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const foundUser = await req.app.get('db').get_user([username]);
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
    }

}