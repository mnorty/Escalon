const bcrypt = require('bcryptjs')

module.exports = {
    register : async (req, res) => {
        console.log('hit')
        const{firstname, lastname, email, password} = req.body
        const db = req.app.get('db');
        const {session} = req;
        const adminFound = await db.admin_check_email({email})
        if(adminFound[0]) return res.status(409).send('This email is already being used')
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        const createAdmin = await db.admin_create_new({
            firstname,
            lastname,
            email,
            password: hash
        })
        session.admin = { id: createAdmin[0].id, email: createAdmin[0].email}
        res.status(200).send(session.admin)
    },
            
    login: async (req, res) => {
        const{password, email} = req.body
        console.log(password, email)
        const db = req.app.get('db');
        const {session} = req;
        const adminFound = await db.admin_check_email({email});
        if (!adminFound[0]) return res.status(401).send('Admin account doesnt exist')
        const authenticated = bcrypt.compareSync(password, adminFound[0].password);
        if (authenticated) {
            session.admin = { id: adminFound[0].id, email: adminFound[0].email, firstname:adminFound[0].firstname,lastname:adminFound[0].lastname}
            res.status(200).send(session.admin)
        } else {
            return res.status(401).send ('Incorrect email or password.')
        }
    },
    accessGameCentral: async (req, res) => {
        const db = req.app.get('db')
        const {session} = req;
        if (session.admin) {
            const gameCentralInfo = await db.admin_get_info({id: session.admin.id});
            const {
                id,
                firstname,
                lastname,
                email
            } = gameCentralInfo[0];
            return res.status(200).send({
                id,
                firstname,
                lastname,
                email
            })
        }
        return res.status(401).send('Please log in to access Game Central')
    },
    getAdmin: (req, res) => {
        const {session} = req;
        if(session.admin) {
            return res.status(200).send(session.admin)
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}