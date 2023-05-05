const fs = require('fs');
const path = require('path');
const [command, title, content] = process.argv.slice(2);

console.log(`Command: ${command} | Title: ${title} | Content: ${content}`);

class Notes {
  getNotes() {
    try {
      console.log('Parsing the data file...');
      const rawData = fs.readFileSync('notes.json');
      const notes = JSON.parse(rawData.toString())
      return notes;
    } catch (error) {
      console.log('No notes data file found. Creating a new one...');
      return []
    }
  }

  create(title, content) {
    const oldNotesData = this.getNotes();
    const newInputDataObj = { title, content };

    oldNotesData.push(newInputDataObj);
    const updatedNotesData = JSON.stringify(oldNotesData);

    fs.writeFile('notes.json', updatedNotesData, (error) => {
      if (error) return console.log(error.message);
      console.log(`Note '${title}' successfully created`);
    });
  }

  list() {
    const notes = this.getNotes();
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note.title}`);
    });
  }

  view(title) {
    const notes = this.getNotes();
    const serchableNote = notes.find((element) => {
      return element.title === title ? true : false;
    })
    console.log(`Note '${title}': ${serchableNote.content}`);
  }

  remove(title) {
    const notes = this.getNotes();
    let serchableNoteIndex;
    notes.forEach((element, index) => {
      if (element.title === title) serchableNoteIndex = index;
    })
    if (serchableNoteIndex < 0) return console.log('Note not found')
    notes.splice(serchableNoteIndex, 1);

    fs.writeFileSync('notes.json', JSON.stringify(notes));
    console.log(`Note ${title} successfully removed!`);
  }
}

const NOTES = new Notes;

switch (command) {
  case 'create':
    NOTES.create(title, content);
    break;
  case 'list':
    NOTES.list();
    break;
  case 'view':
    NOTES.view(title);
    break;
  case 'remove':
    NOTES.remove(title);
    break;
  default: console.log('Unnown command.')
    break;
}
