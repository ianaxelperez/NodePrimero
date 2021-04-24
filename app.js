const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.end("hello world.")
});

app.use((req, res) => {
    res.status(404).send('Error');
  });

app.listen(4500,()=>{
console.log("Servidor esta listo en el puerto 4500.")
});



