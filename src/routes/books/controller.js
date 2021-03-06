const router = require('express').Router();
const {getAll, getOne} = require('./model');

router.get('/books', async (req, res) => {
    try {
        console.log('GET: ' + Date.now());
        const result = await getAll();
        if(result){
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

router.get('/books/:id', async (req, res) => {
    try {
        console.log('GET: ' + Date.now());
        const result = await getOne(req.params.id);
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


router.get('/', (req, res) => {
    res.send('here you come');
    console.log('GET: ' + Date.now());
})

module.exports = router;