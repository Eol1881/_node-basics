// const { stdout } = process; <==> stdout = process.stdout;
// const { stdin, stdout } = process; <==> stdin = process.stdin; stdout = process.stdout;
const { stdin, stdout } = process; // Деструктуризация объекта
stdout.write(`Server started` + '\n');
stdout.write(`Please enter your name: `);



let userName = '';

stdin.on('data', (data) => { // data - это тип эвента,  on - подобие eventListener
  userName = data.toString().trim();
  stdout.write(`Hello, ${userName}. Nice to meet you!` + '\n');
  stdout.write(`Your reversed name is: ${userName.split('').reverse().join('')}` + '\n');
  process.exit();
});

process.on('exit', () => stdout.write(`Goodbye, ${userName}!`));
// ПОРЯДОК ОБЯВЛЕНИЯ ОБРАБОТЧИКОВ НЕ ВАЖЕН - ОНИ ИНИЦИАЛЗИРУЮТСЯ В САМОМ НАЧАЛЕ