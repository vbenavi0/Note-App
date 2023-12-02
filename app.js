const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js')
const chalk = require('chalk');

// fs.writeFileSync('notes.txt', 'This file was created by node');

// fs.appendFileSync('notes.txt', 'Sup');

// const validator = require('validator');
// console.log(validator.isEmail('email@example.com'));
// console.log(chalk.blue('Success!'));

// const command = process.argv[2];
// console.log(command);

// if(command === 'add'){
//     console.log('Adding Note!')
// }
// else if(command === 'remove'){
//     console.log('Removing Note!')
// }

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{notes.addNote(argv.title, argv.body)}
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{notes.removeNote(argv.title)}
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => {notes.listNotes()}
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{notes.readNote(argv.title)}
})

yargs.parse();