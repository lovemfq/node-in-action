var util = require('util'),
    Log = require('log'),
    log = new Log('info'),
    express = require('express'),
    app = express();
    
app.get('/', function(req, res){
  res.send('Hello World');
});
app.listen(3000);
console.log('Listening on port 3000');
