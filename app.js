const fs = require('fs'); //Import File System Module
const yargs = require('yargs'); //Import Yargs Module
const notes = require('./notes.js') //Import Notes File
const chalk = require('chalk'); //Import Chalk Module

yargs.command({ //new command
    command: 'add', //add command
    describe: 'Add a new note', //command descripion
    builder: { //command format
        title: {
            describe: 'Note title', //title value descripion
            demandOption: true, //requires title
            type: 'string' //requires title as string
        },
        body: {
            describe: 'Note body', //body value descripion
            demandOption: true, //requires body
            type: 'string' //requires body as string
        }
    },
    handler: (argv) =>{notes.addNote(argv.title, argv.body)} //addNote function occurs when command is executed using user args
})

yargs.command({
    command: 'remove', //remove command
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //requires title
            type: 'string' //requires title as string
        }
    },
    handler: (argv) =>{notes.removeNote(argv.title)} //removeNote function occurs when command is executed
})

yargs.command({
    command: 'list', //list command
    describe: 'List notes',
    handler: () => {notes.listNotes()} //listNotes function occurs when command is executed
})

yargs.command({
    command: 'read', //read command
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //requires title
            type: 'string' //requires title as string
        }
    },
    handler: (argv) =>{notes.readNote(argv.title)} //readNote function occurs when command is executed
})

yargs.parse(); //parses into normal argument string