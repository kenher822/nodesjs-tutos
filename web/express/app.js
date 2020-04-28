const express = require('express');
const app = express();

let isLogin = () => true;
let logger = (req, res, next) => {
    console.log('Petición de tipo: ', req.method);
    next();
}

let showIP = (res, req, next) => {
    console.log('IP: 127.0.0.1');
    next();
}

app.use((req, res, next) => {
    if (isLogin()) {
        next();
    } else {
        res.send('No estas logeado');
    }
}, logger, showIP);

//app.use(logger);

app.get('/:user', (req, res) => {
    //res.send(`Hello worls NodeJS ${req.method}`);
    let usuario = req.params.user;
    res.send(`Bienvenido ${usuario}`);
});

app.post('/', (req, res) => {
    res.send(`Hello worls NodeJS ${req.method}`);
});

app.put('/', (req, res) => {
    res.send(`Hello worls NodeJS ${req.method}`);
});

app.delete('/', (req, res) => {
    res.send(`Hello worls NodeJS ${req.method}`);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!!!');
});