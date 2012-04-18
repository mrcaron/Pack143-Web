
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , lessMiddleware = require('less-middleware');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  
  app.use(lessMiddleware({
      src: __dirname + '/public', 
      compress: true,
      force: true,
      debug:true
  }));
  
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(process.env.PORT, '0.0.0.0', function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
