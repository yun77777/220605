const express = require('express');
const router = express.Router();

const testModule1 = require('./testModules/testModule1');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/', (req, res, next) => {
    console.log('req.body -> ', req.body);
    req.testValue = 'testValue';
    next();
})

router.post('/', (req, res) => {
    console.log('req.testValue -> ', req.testValue);
    console.log('req.body -> ', req.body);

    testModule1.func1();
    res.send('reponse to the client')
});

module.exports = router;