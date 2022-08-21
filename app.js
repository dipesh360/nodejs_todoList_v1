const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let todos = [];

app.get('/', function(req, res) {
    const today = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    }

    const day = today.toLocaleDateString('en-US', options)
    res.render('index', {'kindOfDay': day,'todos': todos})
});

app.post('/', function(req, res) {
    const { item_name } = req.body;
    todos.push(item_name);
    res.redirect('/');
});

app.listen(3000)