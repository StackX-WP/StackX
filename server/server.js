const path = require('path');
const express = require('express');

// const apiRouter = require('./routes/api');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  console.log('getting index.html')
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.use((req, res) => res.status(404).send('Cannot get route'));

app.listen(3000);
