const express = require('express')//commonjs
const path = require('path')
require('dotenv').config()


const app = express() //app express
const port = process.env.PORT || 8888; // port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
//khai báo rout
app.get('/', (req, res) => {
    res.send('Hello World! vs vinh nguyen')
})

app.get('/abc', (req, res) => {
    res.send('Hello World! vs vinh nguyen check rout')
})

app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})