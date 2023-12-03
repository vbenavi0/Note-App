const fs = require('fs') //Import File System
const chalk = require('chalk') //Import Chalk Module

const addNote = (title, body) => { //function to add a note
    const notes = loadNotes() //stores JSON object array in notes variable
    const duplicateNote = notes.find((note) => note.title === title) //

    if(!duplicateNote){ //if no duplicate notes are found push note and save to JSON file
        notes.push({
            title: title,
            body: body,
        })
    
        saveNotes(notes) //pushes notes array changes to JSON file
        console.log(chalk.green.inverse('New note added!')) //Log message with green background
    } else{ //otherwise log error message
        console.log(chalk.red.inverse('Note title taken!')) //Log message with red background
    }
    
}

const removeNote = (title) =>{ //function to remove a note based on title
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {return note.title !== title}) //filters and returns notes that don't have the title we want to remove
    if(notes.length===notesToKeep.length){ //if no note was filtered out, log error message
        console.log(chalk.red.inverse('No note removed!')) //Log message with red background
    }
    else{ //otherwise log that a note was removed
        console.log(chalk.green.inverse('Note removed!')) //Log message with green background
    }
    saveNotes(notesToKeep)
}

const listNotes = () =>{ //function to list all notes
    console.log(chalk.inverse('Your notes')) //Log with white background
    const notes = loadNotes()
    notes.forEach(note => { //for each note in notes array, log that note's title
        console.log(note.title)
    });
}

const readNote = (title) =>{ //function to log note info based on title
    const notes = loadNotes()
    const read = notes.find((note) => note.title === title) //find note in array based on identical title
    if(!read){ //if no note found, log error message
        console.log(chalk.red.inverse('Note not found'))
    } else{ //otherwise, log the note info that was found
        console.log(chalk.inverse(read.title))
        console.log(read.body)
    }
}

const saveNotes = (notes) => { //function to save notes edits to JSON file
    const dataJSON = JSON.stringify(notes) //converts data to JSON string
    fs.writeFileSync('notes.json', dataJSON) //writes new data to JSON file
}

const loadNotes = () =>{ //function to return array of all notes
    try { //attempt to return array of JSON file data
        const dataBuffer = fs.readFileSync('notes.json') //reads json file data
        const dataJSON = dataBuffer.toString() //converts file data to string
        return JSON.parse(dataJSON); //parses data into usable JS code
    } catch (error) { //if nothing is read return empty array
        return [];
    }
}

module.exports = { //File exports following functions:
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}