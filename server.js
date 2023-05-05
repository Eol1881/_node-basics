const { stdin, stdout } = require('process');
const flags = process.argv.slice(2);
const acceptableFlags = ['-d', '-f'];
let pathFlag;

const isFlagAcceptable = flags.some(flag => {
  if (acceptableFlags.includes(flag)) {
    pathFlag = flag;
    return true
  }
});
// const isFlagAcceptable = function() {
//   return flags.some(function(flag) {
//     return acceptableFlags.includes(flag) ? true : false
//   });
// }();

if (flags.length < 1 || !isFlagAcceptable) {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -d или -f');
}

if (pathFlag === '-d') console.log('Directory path:', __dirname);
else console.log('File path:', __filename);
