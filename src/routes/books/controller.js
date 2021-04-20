const router = require('express').Router();
const {getAll} = require('./model');

router.get('/books', async (req, res) => {
    try {
        console.log('GET: ' + Date.now());
        const result = await getAll();
        res.status(200).send({
            ok: true,
            message: result
        });
    } catch (error) {
        
    }
});

router.get('/books/:id', async (req, res) => {
    try {
        console.log('GET: ' + Date.now());
        const result = await getAll(req.params.id);
        res.status(200).send({
            ok: true,
            message: result
        });
    } catch (error) {
        
    }
});

router.get('/', (req, res) => {
    res.send('here you come');
    console.log('GET: ' + Date.now());
})

module.exports = router;