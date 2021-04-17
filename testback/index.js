const express = require("express");
const app= express();
const port=3000;
app.get('/ksi',(req,res)=>{
    return res.send("yoo allow it man");
});
app.listen(port,()=>console.log('Example port listening on port 3000'));