const persons = [
    {
      id: 1,
      personName: "Fahad",
      personAge: "23",
      personIncome: "2000000"
    },
    {
      id: 2,
      personName: "Zoya",
      personAge: "23",
      personIncome: "3000000"
    }
  ];
  
  for (const person of persons) {
    console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
  }
  