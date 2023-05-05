const https = require('https');

function getRepos(username, done) {
  const option = {
    hostname: 'api.github.com',
    path: `/users/${username}/repos`,
    headers: {
      'User-Agent': 'github-app'
    }
  }

  https.get(option, res => {
    console.log(res.statusCode);
    res.setEncoding('utf-8');
    //res.on('data', data => console.log(data));
    let body = '';
    res.on('data', data => body += data);
    res.on('end', () => {
      const result = JSON.parse(body);
      done(null, result);
    })
  })
}
module.exports = {getRepos};
