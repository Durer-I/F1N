const Express = require('express');
const home = require('./routes/home');
const articles = require('./routes/articles');
const tweet = require('./routes/tweets');
const cors = require("cors");


const app = Express();

// const port = 3000;
const port = process.env.PORT || 3000
// '192.168.10.14,'
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
  })

app.use(cors());
app.use('/api/articles', articles);
app.use('/api/home', home);
app.use('/api/tweet', tweet);
