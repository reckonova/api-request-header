
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
var os = require( 'os' );var networkInterfaces = os.networkInterfaces( );
const requestIp = require('request-ip');
app.get('/api/whoami', function (req, res ) {
const clientIp = requestIp.getClientIp(req);

  res.json({ip:clientIp,software:req.headers['user-agent'], language: req.headers['accept-language']})
})

