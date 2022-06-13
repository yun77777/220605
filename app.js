const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/router'));
// app.use('/test', require('./routes/router2'))

app.get('/hello', (req, res) => {
    res.render('hello', { name: req.query.nameQuery });
});

app.get('/hello/:nameParam', (req, res) => {
    res.render('hello', { name: req.params.nameParam });
});

app.listen(PORT, console.log(`${PORT} is running`)); 