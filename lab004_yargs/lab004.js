import yargs from 'yargs';
import { writeFileSync } from 'fs';

const argv = yargs(process.argv.slice(2))
.options('filename' , {
    alias: 'f',
    type: 'string',
    description: 'Filename to store data',
    demandOption: '--filename is a required parameter',
})
.command('add', {
    alias:'a',
    description: 'Add a new TODO to the list.',
})
.command('delete', {
    alias: 'd',
    description: 'Delete the current selected TODO from the list.'
})
.command('list', {
    alias: 'l',
    description: 'List the current TODO"s that are in the list.'
})