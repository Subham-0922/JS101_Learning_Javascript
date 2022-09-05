//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let yob=1900
let age=2022-yob
13<=age&&age<=19 ? console.log("Teenage") : 21<=age&&age<=29 ? console.log("Twenties") : console.log("Wrong Age")