const Express = require('express');

const router = Express.Router();


router.get('/hotnews', (req, res) => {
    res.send(`Hello from Hot News API!`);  
  });

module.exports = router;