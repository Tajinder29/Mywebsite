// const http=require("http");
// const fs=require("fs");
// const server=http.createServer((req,res)=>{
// if(req.url=="./signin.html")
// {
//     fs.readFile("./signin.html","utf-8",(err,data)=>{
//         if(err){
//             console.log(err);

//         }
//         else{
//             res.writeHead(200,{"content-type":"text/html"});
//             res.write(data);
//             res.end();
//         }
//     })
// }  
// })
// server.listen(2000,()=>{
//     console.log("server2 is working");
// })