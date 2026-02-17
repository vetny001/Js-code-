const accountId = 114 
let accountEmail = "vetny001@mymail.unisa.edu.au"
var accountPassword = "64646"
accountCity = "Mumbai"
let accountState;

// accountId = 115 // is not allowed to change const

accountEmail = "bsbf@mymail.com"
accountPassword = "2323"
accountCity = "Jaipur"

console.log("accountId");

/*
Prefer not to use var
Because of issue in block scope (block scope is basically eg.{if else })
 and functional scope.
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])