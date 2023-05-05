const fs = require('fs');
const path = require('path');

// асинхронный fs.mkdir
// синхронный fs.mkdirSync

console.log(__dirname);

fs.mkdir(path.join(__dirname, 'notes'), err => {
  //if (err) throw err;
  if (err) console.log(`Папка уже существует по пути ${path.join(__dirname, 'notes')}`);
  else console.log(`Папка была создана на пути ${path.join(__dirname, 'notes')}`);
});

fs.writeFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'Hello world',
  (err) => {
    if (err) throw err;
    console.log('Файл был создан');
  }
);

fs.appendFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  ' From append file',
  err => {
    if (err) throw err;
    console.log('Файл был изменен');
  }
);

fs.readFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err;
    console.log('Файл переименован');
  }
);
