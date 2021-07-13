const bcrypt = require('bcryptjs');

module.exports = {

    create: async (req, res) => {
        let { email, password } = req.body;
        const db = req.app.get("db");
        
        let result = await db.auth.read_user([email]);
        let existingUser = result[0];
        
        if (existingUser) {
            return res.status(409).send('that email is already registered');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.auth.create_user([email, hash]);
        const user = registeredUser[0];
        req.session.user = {email: user.user_email, uid: user.tool_user_id}
        return res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get("db");
        const foundUser = await db.auth.read_user([email]);
        const user = foundUser[0];
        if (!user) {
          return res.status(201).send('User not found');
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        if (!isAuthenticated) {
          return res.status(201).send('wrong password bro');
        }
        req.session.user = {email: user.email, uid: user.tool_user_id}
        return res.status(201).send(req.session.user);
        
    },

    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    },

    update: async (req, res) => {
        const { email, password } = req.body;
        const uid = req.session.user.uid;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await req.app.get('db').auth.update_user([email, hash, uid])
        
        //const registeredUser = await req.app.get('db').auth.read_user([uid])
        
        const user = registeredUser[0];
        req.session.user = {email: user.email, uid: user.tool_user_id}
        return res.status(201).send(req.session.user);
    },

    delete: (req, res) => {
        req.app.get('db').auth.delete_user([req.session.user.uid]);
        req.session.destroy();
        return res.sendStatus(200);
    }

}