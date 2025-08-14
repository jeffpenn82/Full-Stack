// make : String
// model : String
// year : Number
// salvaged : Boolean
// owners: Array of Strings (at least three values)
// artificialIntelligence: Null


const vehicle = {
    make: 'Ford',
    model: 'F150',
    year: 2015,
    salvaged: false,
    owners: ['jeff', 'Bill', 'Frank'],
    artificialIntelligence: null
}



Object.keys(vehicle).forEach((key) => {
    if (Array.isArray(vehicle[key])){
        console.log(`The array named ${key} has the following values : `);
        vehicle[key].forEach((property) => {
            console.log(`\t${property}`);
        })
    }else{
        console.log(`The key ${key} and the value is ${vehicle[key]}`);
    }
})

