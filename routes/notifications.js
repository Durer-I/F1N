const Express = require('express');

const router = Express.Router();


router.get('/notifications', (req, res) => {
    res.send(`Hello from Notifications API!`);  
  });

module.exports = router;

