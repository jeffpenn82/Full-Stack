// const obj = {
//   vehicle: {
//     make: "Tesla",
//     model: "S",
//     year: 2020,
//     salvaged: false,
//     authorizedDrivers: [
//       "Person1",
//       "Person2",
//       "Person3"
//     ]
//   }
// };

// const jsonString = JSON.stringify(obj, null, 2);//the null is the replacer and is just null, the number 2 is the number of spaces
// console.log(jsonString)//print in the pretty format

// console.log(`My obj = ${JSON.stringify(obj, null, 2)}`)

// const jsonString = '{"vehicle":{"make":"Tesla","model":"S","year":2020,"salvaged":false,"authorizedDrivers":["Person1","Person2","Person3"]}}';

// let objAgain;
// try{
//    objAgain = JSON.parse(jsonString);
// } catch(err) {
//     console.log(`Error parsing JSON, the erroe was : ${err}`);
//     process.exit(1);
// }
// console.log(jsonString)

// console.log(objAgain)

