// npm install faker
var fakerJs = require("faker");
console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

for (var i = 0; i < 10; i++) {
    console.log(fakerJs.commerce.productName() + " - $" + fakerJs.commerce.price());
}
