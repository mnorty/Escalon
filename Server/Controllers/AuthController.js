const bcrypt = require('bcryptjs')

module.exports = {
    register : async (req, res) => {
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
            
    login: (req, res) => {
        const{password, email} = req.body
        console.log(password, email)
        const db = req.app.get('db');
        const hashedPassword = bcrypt.hashSync(password, 15)
        db.find_user_by_email({email})
        .then((dbres) => {
            console.log(dbres)
            if(dbres.length === 0){
                res.send('Email is Incorrect')
            }
            if(bcrypt.compareSync(password, hashedPassword)) {
                delete dbres[0].pass
                res.send(dbres[0])
            }
            else{
                res.send('Incorrect Password')
            }
        })
    },
}