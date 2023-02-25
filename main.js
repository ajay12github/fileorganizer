#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { Console } = require("console");
// node fsefsffsdfdsfdsf  so argv[0]  = node and argv[1] is rest after node so we are slicing the rest ie inputarr = fsefsffddwdsf
let fs = require("fs")
let path = require("path");
const { setFlagsFromString } = require("v8");
let destPath ;   
//console.log(inputArr);

// node main.js tree "directorypath"
// node main.js organize "directoryPath"
// node main.js help
let utility = require("./commands/utility.js");
let types = utility.types
 
let helpObj = require("./commands/help");

let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

let command = inputArr[0]
switch(command)
{
      case  "tree":
        treeObj.treeKey(inputArr[1])
        break;
        
      case  "organize":
        organizeObj.organizeKey(inputArr[1])
        break;
        
      case  "help":
        helpObj.helpKey();
        break;
      default:
        console.log("Please input right command 😁")
        break;
       }


        
 


    
