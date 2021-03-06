const cors = require('micro-cors')();

let serveStatic = require('./src/serve')('./dist');
let match = require('fs-router')(__dirname + '/routes');

module.exports = cors(async function(req, res) {
  let matched = match(req);
  if (matched) return await matched(req, res);
  return await serveStatic(req, res);
});
