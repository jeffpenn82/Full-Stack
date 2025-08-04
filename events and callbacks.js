// we want to asnyc when =ever possible 
// do not use CallBacks if you do not have too

// const cdFunction = () => console.log('2000, this is a normal cd');

// setInterval(() => {
//     console.log('5000, this is a anonymus cb');
//     process.exit(0);
// }, 5000);

// setInterval(cdFunction, 2000); //No () for cdFunction


// fetchUsername(userService, (username) => {
//   // check that we got a username returned
//   // Is it valid? good, continue...
//   fetchPassword(passwordService, username, (password) => {
//     // check that we got a password returned
//     // Is it valid? good, continue...
//     callInitialAPI(url1, username, password, (initialResults) => {
//       // check that the response is valid
//       // check the return code
//       // modify initialResults to match the expected format for postInitialData
//       postInitialData(url2, initialResults, (secondaryResults) => {
//         // check that the response is valid
//         // check the return code
//         // modify secondary results to match our database structure
//         storeResultsInDb(secondaryResults, (dbResult) => {
//           // check that db response was successful
//           // format an appropriate message for notification of completion
//           notifyOfCompletion(dbResults, (notifyResults) => {
//             console.log('All done!');
//           });
//         });
//       });
//     });
//   });
// });



// import fs from 'fs'
// const testFile = './test.txt';

// // "watch" the testFile
// const watcher = fs.watch(testFile);

// // // Add listener / event handler for the 'change' event - anonymous function style
// let eventCounter = 0;
// watcher.on('change', (event, filename) => {
//   console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

// //   // Close the watcher after 10 events
// //   if (eventCounter > 10) {
// //     console.log('10 events have occurred, closing the watcher...\n');
// //     watcher.close();
// //   }
// });


// import fs from 'fs'
// const testFile = './test.txt';
// // "watch" the testFile
// const watcher = fs.watch(testFile);

// // Define the 'change' handler function
// const changeHandler = (event, filename) => {
//   console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

//   // Remove the change handler after 10 events
//   if (eventCounter > 10) {
//     console.log('10 events have occurred, removing the "change" event handler...\n');
//     watcher.off('change', changeHandler);
//     // Notice that the process doesn't end because the is still active.
//   }
// }

// // Add listener / event handler for the 'change' event - named function style
// let eventCounter = 0;
// watcher.on('change', changeHandler);



//this is fire only once
// import fs from 'fs'
// const testFile = './test.txt';

// // Write data to file
// fs.writeFileSync(testFile, fileWriteData);

// // Define the 'change' handler function
// const changeHandler = (event, filename) => {
//   console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

//   // Remove the change handler after 10 events (this will never happen because of .once())
//   if (eventCounter > 10) {
//     console.log('10 events have occurred, removing the "change" event handler...\n');
//     watcher.off('change', changeHandler);
//     // Notice that the process doesn't end because the close emitter is still active.
//   }
// }

// // "watch" the testFile
// const watcher = fs.watch(testFile);

// // Add a "once" listener / event handler for the 'change' event - named function style
// let eventCounter = 0;
// watcher.once('change', changeHandler);

import { EventEmitter } from 'node:events';;

// Create a new EventEmitter
const emitter = new EventEmitter();

// Add a listener for the '5-second-tick' event
emitter.on('5-second-tick', (event) => {
  console.log(`5-second-tick event triggered with value : ${event}`);
});

let emitCount = 0;
// emit an event every 5 seconds
setInterval(() => {
  emitter.emit('5-second-tick', ++emitCount);
}, 5000);


