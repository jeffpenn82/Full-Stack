// import { readFileSync, writeFileSync } from 'fs';

import os from 'os';
console.log(os.platform());
console.log(os.arch());
// const filePath = './README.md'; //make sure you are in the current directory

// const fileContents = readFileSync(filePath, {encoding: 'utf8', flag: 'r' });

// console.log(`The contents of the REAME are : \n${fileContents}`);

// writeFileSync('./copy_of_readme.md', fileContents);

// console.log(process.cwd());

//console.log(process.env.PATH);

// const pathVar = process.env.PATH;

// const paths = pathVar.split(':');
// console.log('The directories in your PATH end varialbe are : ');
// for (const path of paths) {
//     console.log(`\t${path}`);
// }

// check if an env can be a numer and if they can be lowercase

// console.log(`My process id is : ${process.pid}`);

// console.log(`This is my platform : ${process.platform}`);

// not in web app but maybe utilities


// const paths = pathVar.split(':');
// console.log('The directories in your PATH end varialbe are : ');
// process.exit(1);
// for (const path of paths) {
//     console.log(`\t${path}`);
// }
// process.env.testVar = 3;
// const pathVar = process.env.testVar;
// console.log(pathVar)