/* server con node
const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World')
});

server.listen(3000, () =>{
    console.log('Server on port 3000')
});*/

/* server con express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
})*/

/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About me');
});

app.get('/contact', (req, res) => {
    res.send('Form contact');
});

app.get('/test', (req, res) => {
    res.send('<h1>testing</h1>');
});


app.listen(5000, () => {
    console.log('Server on port 53000');
});*/

/* Módulo nodemond, para no cancelar el servidor cada vez que 
hagamos cambios en la aplicación*/

/* Protocolo http */

/*

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Petition Get received');
});

app.post('/about', (req, res) => {
    res.send('Post request received');
});

app.put('/contact', (req, res) => {
    res.send('Form updated');
});

app.delete('/test', (req, res) => {
    res.send('<h1>Delete request received</h1>');
});


app.listen(5000, () => {
    console.log('Server on port 5000');
});*/

/* Postman, testea rutas del servidor, creado para rest apis
https://web.postman.co/home */

/* Protocolos http GET-POST-PUT-DELETE*/
/*
const express = require('express');
const app = express();

app.use(express.json());
app.all('/user', (req, res, next) => {
    console.log('Tomo este camino');
    next();
    //res.send('finish');
});

app.get('/user', (req, res) => {
    res.json({
        username: 'nahuel',
        lastname: 'Correa'
    }); 
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Post request received');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});


app.listen(5000, () => {
    console.log('Server on port 5000');
});*/

/*Middleware, gestionador de peticiones que podemos ejecutar antes de que 
lleuen a su ruta original, parecido al app.all solo que el middleware funciona
para cualquier ruta que queramos*/

/*
const express = require('express');
const app = express();
function logger(req, res, next){
    //console.log('Request received');
    console.log(`Route received:  ${req.protocol}://${req.get('host')}${req.originalUrl} `);
    next();
}

app.use(express.json());
app.use(logger);

/*app.all('/user', (req, res, next) => {
    console.log('Tomo este camino');
    next();
    //res.send('finish');
});*/

/*
app.get('/user', (req, res) => {
    res.json({
        username: 'nahuel',
        lastname: 'Correa'
    }); 
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Post request received');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});


app.listen(5000, () => {
    console.log('Server on port 5000');
});*/

/* npm morgan*/
/* static files*/
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/user', (req, res) => {
    res.json({
        username: 'nahuel',
        lastname: 'Correa'
    }); 
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Post request received');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});

app.use(express.static('public'));//static ya viene por default en express, no hay que instanciarlo

app.listen(5000, () => {
    console.log('Server on port 5000');
});