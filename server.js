const { stdin, stdout } = require('process');

stdout.write('Hello');
stdin.on('data', function (data) {
  stdout.write(data);
  process.exit();
})