const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { get } = require('http');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
    expressSession({
        secret: "my key",
        resave: true,
        saveUninitialized: true,
    })
);

app.get('/process/main', (req, res) => {
    console.log('req.session.user -> ', req.session.uesr);
    if (req.session.user) {
        res.render('main', { user: req.session.user });
    } else {
        res.redirect('/process/login');
    }
});

app.post('/process/login', (req, res) => {

    // console.log('req.body.data -> ', req.body.data);
    // console.log('req.password -> ', req.password);

    const paramId = req.body.id || req.query.id;
    const pw = req.body.pw || req.query.pw;
    console.log('paramId -> ', paramId);
    console.log('pw -> ', pw);

    if (req.session.user) {
        res.send('already logined')
    } else {
        req.session.user = {
            id: paramId,
            pw: pw,
            name: 'userName',
            authorized: true,
        }
    }
    // res.send(JSON.stringify(req.session.user) + ' -> successfully logined');

    // res.render('login', { user: req.session.user });

    res.redirect('/login');

});

app.use('/test', require('./routes/router'));
// app.use('/test2', require('./routes/router2'))

app.get('/hello', (req, res) => {
    res.render('hello', { name: req.query.nameQuery });
});

app.get('/hello/:nameParam', (req, res) => {
    res.render('hello', { name: req.params.nameParam });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(PORT, console.log(`${PORT} is running`)); 