let fs = require("fs")
let path = require("path");
function helpFn() 
{
  console.log(`  
  List of All the commands
  node main.js tree "dirPath"
  node main.js organize "dirPath"
  node main.js help
                 `);
}


module.exports = 
{
  
    helpKey : helpFn
}