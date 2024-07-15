      // create a server using express

// const express = require("express");

// const app = express();
// const port= 4000;

// app.get("/", (req,res)=>{
//     res.send("<h1> Hello world <h1>");
// });

// app.get("/about", (req,res)=>{
//     res.send("<h1> Hello about <h1>");
// });

// app.get("/*", (req,res)=>{
//     res.send("<h1> NOT FOUND <h1>");
// });

// app.listen(port,()=>{
//     console.log(`Server is working on port: ${port}`);
// });



           // make api

const express = require("express");

const app = express();
const port= 4000;

app.get("/api/v1/userdata", (req,res)=>{
    res.json({
        name: "Deep",
        email: "sample@gmail.com",
        password: "hexed",
    });
});

app.post("/api/v1/register", (req,res)=>{
    res.json({
        success: true,
    }); 
});


app.listen(port,()=>{
    console.log(`Server is working on port: ${port}`);
});