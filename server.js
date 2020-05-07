const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Home Route
app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/views/home.html');
});

// About Route
app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/about.html');
});

// Work Route
app.get('/works', (req, res, next) => {
	res.sendFile(__dirname + '/views/works.html');
});

// Gallery Route
app.get('/gallery', (req, res, next) => {
	res.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Gallery</title>
          <link rel="stylesheet" href="/public/stylesheets/style.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
        </head>
        <body>
        <div class="ui container gallery">
          <h1>Gallery</h1>
          <div class="ui three column grid">
            <div class="column">
                <div class="ui segment">
                    <img src="/images/pic1.jpeg" width="100%" />
                </div>
            </div>
            <div class="column">
                <div class="ui segment">
                    <img src="/images/pic2.jpeg" width="100%" />
                </div>
            </div>
            <div class="column">
                <div class="ui segment">
                    <img src="/images/pic3.jpeg" width="100%"/>
                </div>
            </div>
        </div>
        </body>
      </html>
    `);
});

app.listen(3000);
