const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {   // ^/$ begin with a slash and end with a slash | (or) /index.html  ()? makes the ".html" optional
    // two ways to do this
    //res.sendFile('./views/index.html', {root:__dirname})
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
})

// redirect old page to new page
router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html');   
})

module.exports = router;