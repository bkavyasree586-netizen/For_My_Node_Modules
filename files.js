const {readFile,writeFile}=require("fs");
readFile("./first.txt","utf8",(err,res)=>{
    if(err)
    {   return; }
    var first=res;
    readFile("./second.txt","utf8",(err,res)=>{
        
            if(err)
            {   return; }
            var second=res;
        var result="\n"+first+"\n"+second;
        writeFile("./New.txt",result,{flag:'a'},(err,res)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            else{
                console.log("Your Program Is Successful");
            }
            
        })
    })
})