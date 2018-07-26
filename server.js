const path = require('path');
const express = require('express');
const { Pool } = require('pg');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.get('/db', function (request, response) {
  const pool = new Pool({
    connectionString: "postgres://icwzyfcjajqpnu:0dc37d8364d3b7f9d4300f3ef5650c0041c81dadaa7eb4a8b4175d8c297274c1@ec2-54-83-22-244.compute-1.amazonaws.com:5432/de2gnmjo67bjnb",
  });

  let resp = 'done.';

  pool.query('SELECT NOW()', (err, res) => {
    response.send("Response: " + err + ":" + res);
    pool.end()
  })
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
