const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./note.js')
//Add command
yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder: {
        title:{ // Adding an argument to the command
            describe:'Note title',
            demandOption:true,//Needs to be provided
            type: 'string'//arg type
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})
//Remove command
yargs.command({
    command:'remove',
    describe:'remove a Note',
    builder: {
        title:{ // Adding an argument to the command
            describe:'Note title',
            demandOption:true,//Needs to be provided
            type: 'string'//arg type
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
//Read Command
yargs.command({
    command:'read',
    describe:'reading a Note',
    builder: {
        title:{ // Adding an argument to the command
            describe:'Note title',
            demandOption:true,//Needs to be provided
            type: 'string'//arg type
        },
    },
    handler: function (argv) {
notes.readNote(argv.title) 
   }
})
//List Command
yargs.command({
    command:'list',
    describe:'list of notes',
    handler: function (agrv) {
        notes.listNotes(agrv)
    }
})
yargs.parse()
