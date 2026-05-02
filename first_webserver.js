const http=require("http")
const server=http.createServer((req,res)=>{
    
    if(req.url==='/')
    {
          res.end("This is the Home Page  Of the Server"); 
    }
    else if(req.url==='/about')
    {
            res.end("This is the About  Of the Server"); 
    }
    else{
              res.write(`<p>Here Is Your Link <a href="/">Click Me  </a></p>`)
              res.end(`<h1> Oops... </h1>`); 
            
    }


  

})
server.listen(5000);