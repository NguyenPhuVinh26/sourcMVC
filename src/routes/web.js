const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! vs vinh')
})

router.get('/abc', (req, res) => {
    res.send('Hello World! vs vinh nguyen check rout')
})

router.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;