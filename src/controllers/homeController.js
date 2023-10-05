const getHomepage = (req, res) => {
    res.send('Hello Home page conntroller !!!');
}

const getABC = (req, res) => {
    res.send('check abc');
}

const getHoidanIt = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getHoidanIt
}