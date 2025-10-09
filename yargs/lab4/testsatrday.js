//Delete with id


// could also use the date time and tostring
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        id: uuidv4().slice(0,5),
        name:"Cameron"
    },
    {
        id: uuidv4(),
        name:"pat"
    },
    {
        id: uuidv4(),
        name:'jeff'
    },
    {
        id: uuidv4(),
        name:'dee'
    },
    {
        id: uuidv4(),
        name:'cameron'
    }
]

const deleteId = 1;
// const cleanData = [];

// for (let d of data) {
//     if (d.id === deleteId) {
//         continue;
//     }
//     cleanData.push(d);
// }


// for (let d of data) {
//     if (d.id !== deleteId) {
//         continue;
//     }
//     cleanData.push(d);
// }


// const cleanData = data.filter((d)=> {
//     if (d.id !== deleteId) {
//         return true;
//     }
// });

const deleteIndex = data.findIndex(d => d.id === deleteId);
data.splice(deleteIndex, 1);

 
// const cleanData = [];
console.log(data);