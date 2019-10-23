var express = require("express");
var app = express();


app.use(express.static("public"));


app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/index.html");
});

var os = require("os");
var networkInterfaces = os.networkInterfaces();
const requestIp = require("request-ip");

app.get("/api/whoami", function(req, res) {
  const clientIp = requestIp.getClientIp(req);
  var iface = os.networkInterfaces();
  var ip = iface.eth0[0].address;
  
  
  
  
  res.json({
    "ipaddress": clientIp,
    software: req.headers["user-agent"],
    "language": req.headers["accept-language"].split(",")[0],
    "system": os.platform() + " " + os.arch()
  });
});


var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
listener;
