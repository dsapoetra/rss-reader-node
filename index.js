const express = require('express');
const app = express();              
const port = 3000;
const RssParser = require('rss-parser');

const parser = new RssParser();

app.get('/', (req, res) => {  
    res.sendFile('index.html', {root: __dirname});
});



// Fetch and parse the RSS feed
app.get('/rss', (req, res) => {
    parser.parseURL(process.env.RSS_FEED_URL)
        .then(feed => {
    // Use the parsed feed data
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(feed, null, 4));
  })});



app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});