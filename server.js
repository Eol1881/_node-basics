const { stdin, stdout } = require('process');
const flags = process.argv.slice(2);
let selectedMode;

if (flags.indexOf('-m') !== -1) {
  selectedMode = 'multiply';
} else if (flags.indexOf('-s') !== -1) {
  selectedMode = 'summarize';
} else {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
  process.exit();
}

stdout.write('Hello\nSelected mode: '+ selectedMode + '\n');

function getInput() {
  return new Promise((resolve, reject) => {
    stdin.once('data', function(data) {
      resolve(parseInt(data.toString().trim()));
    });
  });
}

async function calculate() {
  let num1, num2, result;
  stdout.write('Please enter the 1st number: ');
  num1 = await getInput();
  stdout.write('Please enter the 2nd number: ');
  num2 = await getInput();
  if (selectedMode === 'multiply') {
    result = num1 * num2;
  } else if (selectedMode ==='summarize') {
    result = num1 + num2;
  }
  stdout.write(`Result of ${selectedMode}: ${result}`);
  process.exit(0);
}
calculate();
