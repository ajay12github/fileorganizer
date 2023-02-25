
let fs = require("fs")
let path = require("path");
let utility = require("./utility.js");
let types = utility.types
 
function organizeFn(dirPath)
{
     console.log(dirPath);
     
    
  if(dirPath==undefined)
  {
    dirPath = process.cwd();
    organizeHelper(dirPath , destPath);
          
   // console.log("kinldy enter the path !!");

  }else 
  {
      let doesexist  = fs.existsSync(dirPath)
      if(doesexist)
      {

        destPath = path.join(dirPath , "organized_file");
        if(fs.existsSync(destPath)==false)
        {
            fs.mkdirSync(destPath);
        }
        organizeHelper(dirPath , destPath);

      }
      else{
        
        console.log("kindly enter the correct path !!")
      
      }

  }

   
 

}

function organizeHelper(src  , dest) 
{
    let childnames  = fs.readdirSync(src);
     console.log(childnames);
   for(let i  = 0; i < childnames.length; i++)
   {
          let childPath = path.join(src, childnames[i]);
          let isFile = fs.lstatSync(childPath).isFile();
           if(isFile)
           {
            //console.log(childnames[i]);
            let  category  = getCategory(childnames[i]); 
            console.log(childnames[i] , "belongs to ", category);
            sendFiles(childPath,dest,category);
            
           }
           

  }
     

}
function getCategory(name)
{
  let ext  = path.extname(name);
  ext  = ext.slice(1);
  for(let type in types)
  {
    let ctypeArray = types[type];
    for(let i  = 0; i < ctypeArray.length; i++)
    {
      //    console.log(ext ," " ,ctypeArray[i]);

      if(ctypeArray[i] == ext)
      {
        return type;
      }
    }

    }  
    return  "others";
  }

  

  function sendFiles(srcFile , dest, category)
    {
         let categoryPath = path.join(dest, category);
         if(fs.existsSync(categoryPath)==false)
         {
             fs.mkdirSync(categoryPath);
         }
         let filename = path.basename(srcFile);
         let destFile = path.join(categoryPath, filename);
         fs.copyFileSync(srcFile, destFile);
         fs.unlinkSync(srcFile);
       
       
       
        }


        module.exports = 
        {
          organizeKey  : organizeFn
        } 