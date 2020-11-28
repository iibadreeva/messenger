// server.foundation.js
const express   = require('express');
const nunjucks  = require('nunjucks')
const app       = express();

const PORT = 3000;

const API_PREFIX = '/api/v1';

// app.use(express.static('./'));
app.use(express.static(`${__dirname}/static`));
app.use('/css', express.static(`${__dirname}/static/css`))

/*app.set('view engine', 'njk')
nunjucks.configure('views', {
  express: app
})*/

// app.use((req, res, next) => {
//   console.log('this is always there')
//   // res.render('index.njk')
//   next();
// });


app.get(`${API_PREFIX}/text`, (req, res) => {
  res.status(201).send('my text');
});

app.put(`${API_PREFIX}/json`, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({data: {
      items: [1, 2, 3]
    }});
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});