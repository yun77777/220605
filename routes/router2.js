const compression = require('compression');
const express = require('express');
const router = express.Router();

// router.post('/', (req, res) => {
//     res.send('...');
// })

router.post('/', compression(), (req, res) => {
    res.send('...');
});

module.exports = router;

