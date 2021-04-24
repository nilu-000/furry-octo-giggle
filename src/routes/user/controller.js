const router = require('express').Router();
const {getAll, getAdmins, createUser, findUser} = require('./model');

router.get('/users',/* isAdmin middleware */ async (req, res) => {
    try {
        console.log('GET: ' + Date.now());
        const result = await getAll();
        if (result){
            res.status(200).send({
                ok: true,
                message: result
            });
        }else{
            throw new Error('Not found');
        }
    } catch (error) {
        res.status(400).send({
            ok: false,
            message: error.message
        });
    }
});

router.post('/register', async(req, res) => {
    try {
        console.log('POST: ' + Date.now());
        const {fullname, email, password} = req.body;
        const user = await createUser(fullname, email, password);
        if(user){
            res.status(201).send({
                ok: true,
                message: user
            })
        }else{
            throw new Error('Could not create user');
        }
    } catch (error) {
        res.status(400).send({
            ok: false,
            message: error.message
        })
    }
});

router.post('/login', async(req, res) => {
    try {
        console.log('POST: ' + Date.now());
        const {fullname, email, password} = req.body;
        const user = await findUser(email, password);
        if(user){
            res.status(200).send({
                ok: true,
                message: user
            })
        }else{
            throw new Error('Could not find user');
        }
    } catch (error) {
        res.status(400).send({
            ok: false,
            message: error.message
        })
    }
});

router.get('/admins',/* isAdmin middleware */ async (req, res) => {
    try {
        console.log('GET: ' + Date.now());
        const result = await getAdmins();
        if (result){
            res.status(200).send({
                ok: true,
                message: result
            });
        }else{
            throw new Error('Not found');
        }
    } catch (error) {
        res.status(400).send({
            ok:false,
            message: error.message
        });
    }
} )

router.get('/', (req, res) => {
    res.send('here you come');
    console.log('GET: ' + Date.now());
})

module.exports = router;