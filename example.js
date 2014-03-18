var request = require('./');

request({
  method: 'get',
  path: 'connect/latest'
}, {
  registry: 'http://r.cnpmjs.org'
}, function (err, data) {
  console.log(err, data);
});
