var http=require('http');

var server=http.createServer((req,res)=>{

var mytry={
    name:"Rahul",
    passion:"playing cricket",
    Birthdate:"11/01/1999"
};
res.end(JSON.stringify(mytry));

});

server.on("connection",(socket)=>{
    console.log("hello");
});
server.listen(3000);
console.log("going");
