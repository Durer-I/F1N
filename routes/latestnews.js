const Express = require('express');

const router = Express.Router();


router.get('/latestnews', (req, res) => {
    res.send(`Hello from Latest News API!`);  
  });

module.exports = router;