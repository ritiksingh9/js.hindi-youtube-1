const accountId =144553
let accountEmail = "ritik@google.com"
var accountPassword ="12345"
accountcity ="jaipur"
let accountState;

// accountId =2 // not allowed

accountEmail ="hc@hc.com"
accountPassword ="21212121"
accountcity ="Bengaluru"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functioal scope
*/

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])