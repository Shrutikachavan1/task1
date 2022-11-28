const http = require('http');
const fs=require('fs');
const PORT=9999;

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
               res.write(data);
               res.end();

        })
        
    }
    else if(req.url=="/createfile"){
        if(fs.existsSync("neosoft1.txt")){

            fs.readFile('create.html',(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);  
                res.end();   

            })
        }
        else{
            fs.writeFile('neosoft1.txt',"Welcome!!",(err)=>{
                if(err) throw err
                else{
                    fs.readFile('create2.html',(err,data)=>{
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.write(data);     
                        res.end();
                    })
                }
            })
            
        }
    }
    else if(req.url=="/readfile"){
        if(fs.existsSync("neosoft1.txt")){
            let data = fs.readFileSync("neosoft1.txt")
          
            res.write(`<html><body><h2 style='color:blue; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;height: 58px; width: 80%; 
            margin-left: 150px;border-radius: 20px;background-color: #38a89e8a';>${data.toString()}</h2></body></html>`);
            res.end()
        }
        else{
            
            res.write("<html><body><h2 style='color:yellow; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;background-color: black';>File is not exits please check</h2></body></html>");
            
        }
    }
    else if(req.url=="/updatefile"){
        if(fs.existsSync("neosoft1.txt")){
            fs.appendFileSync("neosoft1.txt","File is updated")
            fs.readFile('update.html',(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);  
                res.end();   

            })
            // res.write("<html><body><h2 style='color:green; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;background-color: black';>File is Updated!!!!</h2></body></html>");
            
        }else{
            fs.readFile('update2.html',(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);  
                res.end();   

            })
            // res.write("<html><body><h2 style='color:yellow; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;background-color: black';>File is not exits please check</h2></body></html>");
            
        }
    }
    else if(req.url=="/deletefile"){
        if(fs.existsSync("neosoft1.txt")){

            fs.unlink("neosoft1.txt",(err)=>{
                if(err) throw err
                else{
                    fs.readFile('delete.html',(err,data)=>{
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.write(data);  
                        res.end();   
        
                    })
                    // res.write("<html><body><h2 style='color:green; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;background-color: black';>File is deleted successfully!</h2></body></html>");
            
                }
            })
        }
        else{
            fs.readFile('delete2.html',(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);    
                res.end(); 

            })
            // res.write("<html><body><h2 style='color:yellow; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;background-color: black';>File is not exits please check</h2></body></html>");
            
        }
    }
    else{
        res.write("<html><body><h2 style='color:red; text-align: center;margin-top: 32px;     height: 73px;padding-top: 40;background-color: black';>Enter Valid</h2></body></html>");
            
    }
    
})
server.listen(PORT,(err)=>{
    if(err) throw err
    else
    console.log(`Server is on ${PORT}`);
})
