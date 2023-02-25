let fs = require("fs")
let path = require("path");
let utility = require("./utility.js");
let types = utility.types
 

function treeFn(dirPath )
{


      
  if(dirPath==undefined)
  {
       treeHeleper(process.cwd() , "");
       return ;

    
    //console.log("kinldy enter the path !!");

  }else 
  {
      let doesexist  = fs.existsSync(dirPath)
      if(doesexist)
      {

         treeHeleper(dirPath ,  "");

      }
      else{
        console.log("kindly enter the correct path !!")
      }

  }

 
  
   //console.log("tree")
}
  

  
         
function treeHeleper(dirPath , indent)
{


  
  let isFile = fs.lstatSync(dirPath).isFile();
  if(isFile == true)
  {
     let filename = path.basename(dirPath)
     console.log(indent+"|---"+filename)
         
  }else{
    let dirname = path.basename(dirPath);
    console.log(indent+"|____"+dirname)
    let childnames = fs.readdirSync(dirPath)
    for(let i  = 0; i < childnames.length; i++)
    {
        treeHeleper(path.join(dirPath, childnames[i]),indent+"\t")

    }


  }
}

module.exports = 
{
  treeKey  :treeFn
}