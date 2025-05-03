const Express = require('express');

const router = Express.Router();


router.get('/profile', (req, res) => {
    res.send(`Hello from Profiles API!`);
  });

module.exports = router;