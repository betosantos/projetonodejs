const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.render('index')
})


app.get('/beto', function(req, res) {
    res.render('ola beto')
})


app.listen(8080, function() {
    console.log("Servidor está rodando na porta 8080...")
});