const Express = require('express');
const mongoose = require('mongoose');
const router = Express.Router();

mongoose.connect('mongodb+srv://admin:c6SFbRNHfLgKrp00@formula1news.ktjylno.mongodb.net/Formula1?retryWrites=true&w=majority&appName=Formula1News')
// mongoose.connect('mongodb://localhost/testarticle')
    .then(() => {
        console.log('Connected to MongoDB database in Atlas.');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB:', err);
    });


const articleSchema = new mongoose.Schema({
  title: String,
  body: String,
//   date:{type: Date, default: Date.now},
  image: String,
  url: String,
  date: Date,
  tag : String,
});
 

  
// const Article = mongoose.model('Article', articleSchema);
// const Article = mongoose.model('Post', articleSchema);
const Article = mongoose.model('New', articleSchema);
  
async function getArticles(id) {
  try {
    if (!id) {  const articles = await Article.find().sort({"date":-1}).limit(20);
        
        return articles;
    }
    else {const articles = await Article.findById(id);
        return articles;
    }
    
  } catch (error) {
      console.error('Error fetching articles:', error);
  }
}


router.get('/', async (req, res) => {
    try {  
        const articles = await getArticles();
        if (!articles) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.send(articles);
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  
router.get('/:id', async (req, res) => {
    try {  
        const articles = await getArticles(req.params.id);
        if (!articles) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.json([
            { title: articles.title, body: articles.body, image:articles.image, url:articles.url}
        ]);
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;










