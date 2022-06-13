// const express = require('express');
// const testModule = express.Router();

// testModule.post('/', (req, res) => {
//     res.send('holy... this is from the test module');
// });

// module.exports = testModule;


const testModule = {
    func1 :function() {
        console.log("what's going on..")
    }
}

module.exports = testModule;