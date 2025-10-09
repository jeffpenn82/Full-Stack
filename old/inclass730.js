// import os from 'os';

// console.log(process.env.PATH);

// const pathVar = process.env.PATH;

// const paths = pathVar.split(':');
// console.log('The directories in your PATH end varialbe are : ');
// for (const path of paths) {
//     console.log(`\t${path}`);
// }

// process.exit(123);

// import http from 'http';

// http.get('http://nodejs.org/dist/index.json', (res) => {
//   if (res.statusCode !== 200) {
//     console.log(`Error : Status code ws ${res.statusCode}`);
//     res.resume();
//     return;
//   }
  
//   res.setEncoding('utf8');
//   let rawData = '';

//   res.on('data', (chunk) => { 
//     rawData += chunk; });
//   res.on('end', () => {
//     console.log(rawData)
// });
// });

// const fiveSecondPromise = (seconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// fiveSecondPromise(5).then(() => {
//   console.log('Looks like it\'s been five seconds...');
// }).catch((err) => {
//   console.error(`An error/reject occurred!  The error was : ${err}`);
// }).finally(() => {
//   console.log('Everything in the promise chain is done executing');
// });


// console.log('Wonder when this will resolve.....')

// const variableSecondPromise = (seconds) => {
//   return new Promise((resolve, reject) =>{
//     setTimeout(resolve, seconds * 1000, seconds);
//     if (seconds === 3) {
//       setTimeout(reject, 2000, 'I don\'t feel like executing a 3 second promise');
//     }
//   })
// };

// const promises = [];
// // 1 second promise
// promises.push(variableSecondPromise(1));
// // 2 second promise
// promises.push(variableSecondPromise(2));
// // 3 second promise
// promises.push(variableSecondPromise(3));
// // 4 second promise
// promises.push(variableSecondPromise(4));

// Promise.all(promises).then((results) => {
//   console.log('All promises have resolved.  Results are : ');
//   results.forEach((res) => {
//     console.log(JSON.stringify(res));
//   });
// }).catch((err) => {
//   console.error(`An error/reject occurred!  The error was : ${err}`);
// }).finally(() => {
//   console.log('Everything in the promise chain is done executing');
// });

// const variableSecondPromise = (seconds) => {
//   return new Promise((resolve, reject) =>{
//     setTimeout(resolve, seconds * 1000, seconds);
//     if (seconds === 3) {
//       setTimeout(reject, 2000, 'I don\'t feel like executing a 3 second promise');
//     }
//   })
// };

// const promises = [];
// // 1 second promise
// promises.push(variableSecondPromise(1));
// // 2 second promise
// promises.push(variableSecondPromise(2));
// // 3 second promise
// promises.push(variableSecondPromise(3));
// // 4 second promise
// promises.push(variableSecondPromise(4));

// Promise.allSettled(promises).then((results) => {
//   console.log('All promises have resolved.  Results are : ');
//   results.forEach((res) => {
//     console.log(JSON.stringify(res));
//   });
// }).catch((err) => {
//   console.error(`An error/reject occurred!  The error was : ${err}`);
// }).finally(() => {
//   console.log('Everything in the promise chain is done executing');
// });


// const variableSecondPromise = (seconds) => {
//   return new Promise((resolve, reject) =>{
//     setTimeout(resolve, seconds * 1000, seconds);
//   });
// };

// const executePromisesWithAwait = async () => {
//   const oneSec = await variableSecondPromise(1);
//   console.log(`Result of one second promise was ${oneSec}`);

//   const twoSec = await variableSecondPromise(2);
//   console.log(`Result of two second promise was ${twoSec}`);

//   const threeSec = await variableSecondPromise(3);
//   console.log(`Result of three second promise was ${threeSec}`);

//   const fourSec = await variableSecondPromise(4);
//   console.log(`Result of four second promise was ${fourSec}`);
// };

// executePromisesWithAwait();

// try {
//   console.log('I\'m about to throw an exception...');
//   throw new Error('Told you so');
//   console.log('I\'ll never execute due to the exception above : (');
// } catch (ex) {
//   console.error(`Error!  An exception was thrown with value : ${ex}`);
// }

// try {
//   console.log('I\'m about to throw an exception...');
//   console.iDoNotExist('test');
//   console.log('I\'ll never execute due to the exception above : (');
// } catch (ex) {
//   console.error(`Error!  An exception was thrown with value : ${ex}`);
// }

// Finally with exception
// try {
//   console.log('I\'m about to throw an exception...');
//   console.iDoNotExist('test');
//   console.log('I\'ll never execute due to the exception above : (');
// } catch (ex) {
//   console.error(`Error!  An exception was thrown with value : ${ex}`);
// } finally {
//   // Cleanup database connection or other resources
//   console.log('O good, you\'re finally here...');
// }

// // Finally without exception
// try {
//   console.log('No exceptions here.');
// } catch (ex) {
//   console.error(`Error!  An exception was thrown with value : ${ex}`);
// } finally {
//   // Cleanup database connection or other resources
//   console.log('O good, you\'re finally here...');
// }

// const fs = require('fs/promises');

// const testFile = './test.txt';

// // Check if a file exists - async
// const fileExistsPromise = async () => {
//   let fileExists;

//   try {
//     fileExists = await fs.stat(testFile);
//   } catch (ex) {
//     return false;
//   }

//   // if it exists, delete it
//   if (fileExists) {
//     await fs.rm(testFile);
//   }

//   return true;
// }

// // Write file, async
// const fileWritePromise = async () => {
//   // Create data to write to the file : 0 to 9, each on a new line
//   let fileWriteData = '';
//   for (let x = 0; x < 10; x++) {
//     fileWriteData += `\t${x}\n`
//   }

//   // Write data to file
//   await fs.writeFile(testFile, fileWriteData);
// };

// // Read file, async
// const fileReadPromise = async () => {
//   return await fs.readFile(testFile, { encoding:'utf8', flag:'r' });
// };

// // Async main logic that lets us 'await' the promises
// const runLogic = async () => {
//   console.log(`Checking if file exists... ${await fileExistsPromise()}`);
//   console.log(`Writing file...`);
//   await fileWritePromise();
//   console.log(`Reading file ...`);
//   console.log(`\tfileContents (${testFile}) are : \n${await fileReadPromise()}`)
// }

// // Execute everything
// runLogic();

