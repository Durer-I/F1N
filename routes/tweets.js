const Express = require('express');
const mongoose = require('mongoose');
const router = Express.Router();

db = mongoose.createConnection('mongodb+srv://admin:c6SFbRNHfLgKrp00@formula1news.ktjylno.mongodb.net/Formula1?retryWrites=true&w=majority&appName=Formula1News')
    // .then(() => {
    //     console.log('Connected to MongoDB database.');
    // })
    // .catch(err => {
    //     console.error('Could not connect to MongoDB:', err);
    // });



async function getTweets() {
    try {
        const collection = db.collection('tweets'); // Specify the collection name
        const tweets = await collection.find().sort({"created_at":-1}).limit(20).toArray(); // Fetch the latest 10 tweets
        return tweets;
     
    } catch (error) {
        console.error('Error fetching tweets:', error);
        throw error; // Ensure the error is propagated
    }
}


router.get('/', async (req, res) => {
    try {  
        const tweets = await getTweets();
        if (!tweets) {
            return res.status(404).json({ error: 'Tweets not found' });
        }
        res.send(tweets);
    } catch (error) {
        console.error('Error fetching Tweets:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;