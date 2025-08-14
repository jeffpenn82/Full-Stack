const obj = {
  vehicle: {
    make: "Tesla",
    model: "S",
    year: 2020,
    salvaged: false,
    authorizedDrivers: [
      "Person1",
      "Person2",
      "Person3"
    ]
  }
};

const jsonString = JSON.stringify(obj);
// const objAgain = JSON.parse(jsonString);