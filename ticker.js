const http = require('http');
const { Pool, Client } = require('pg');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(8085);

/* server started */
console.log('> hello world running on port 8085');

const pool = new Pool({
  user: 'icwzyfcjajqpnu',
  host: 'ec2-54-83-22-244.compute-1.amazonaws.com',
  database: 'de2gnmjo67bjnb',
  password: '0dc37d8364d3b7f9d4300f3ef5650c0041c81dadaa7eb4a8b4175d8c297274c1',
  port: 5432,
})

function intervalFunc() {
  pool.query('SELECT * FROM public."Quotes" WHERE "id"=1;', (err, res) => {
    const ltp = Number.parseFloat(res.rows[0].ltp);
    const newLtp = ltp + (Math.random() * (-2.00 - 2.00)) + 2.00;
    pool.query('UPDATE public."Quotes" SET "ltp"='+newLtp.toFixed(2)+' WHERE "id"=1;', (err, res) => {
      console.log(newLtp.toFixed(2));
    });
  });
}

setInterval(intervalFunc, 1000);
//pool.end();
/*
exports.updateProduct = function(req, res){
  pg.connect(cs, function(err, client, done) {
    var query = "UPDATE products SET pr_title = ($1), pr_usercode = ($2) WHERE pr_id=($3)";
    client.query(query, [req.body.pr_title, req.body.pr_usercode, req.params.pr_id], function(err, result) {
      if (handleErr(err, done)) return;
      done();
      sendResponse(res, result.rows[0]);
    })
  });
};

setTimeout(function () {
  util.puts('Throwing error now.');
  throw new Error('User generated fault.');
}, 5000);
*/
