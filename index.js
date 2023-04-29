var https = require('https');

exports.handler = function(event, context) {
  console.log('start request to ' + event.url)
  https.get(event.url, function(res) {
    console.log("Got response: " + res.statusCode);
    context.succeed();
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
    context.done(null, 'FAILURE');
  });

  console.log('end request to ' + event.url);
}
