var request = require('./');

request({
  method: 'get',
  path: 'connect/latest'
}, function (err, data) {
  console.log(err, data);
});
