const person = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
  };
  
  console.log("Properties are below:");
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(key);
    }
  }
  