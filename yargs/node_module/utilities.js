import yargs from 'yargs';
import { writeFileSync} from 'fs';

//filename
//nubmer of items
//json


const argv = yargs(process.argv.slice(2))
.options('filename' , {
    alias: 'f',
    type: 'string',
    description: 'Filename to store data',
    demandOption: '--filename is a required parameter',
})
.options('numberOfItems' , {
    alias: 'n',
    type: 'number',
    description: 'Number of items to write to the file',
    // demandOption: '--filename is a required parameter',
    default: 10,
})
.options('json' , {
    alias: 'j',
    type: 'boolean',
    description: 'If specified write data is json format',
})

.parse();

//destructure from argv
const { filename, numberOfItems, json } = argv;

console.log(`filename: ${filename}, numberOfItems: ${json}`)

const output = [];

for (let x =0; x < numberOfItems; x += 1) {
    console.log(x)
    output.push(x);
    
}

let outputData = '';
if (json) {
    outputData = JSON.stringify(output, null, 2);
}else{
    outputData  = output.join(',');
}


writeFileSync(filename, outputData, { encoding: 'utf8'})