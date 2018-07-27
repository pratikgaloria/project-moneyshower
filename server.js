const path = require('path');
const express = require('express');
const { Client } = require('pg');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.get('/db', (request, response) => {
  const connectionString = 'postgres://postgres:postgres@localhost:5432/showr';

  const client = new Client({
    connectionString,
  });

  client.connect();

  client.query('SELECT * FROM segment', (err, res) => {
    response.json(res.rows);
    client.end();
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
});
