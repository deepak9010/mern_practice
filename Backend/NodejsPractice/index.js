
         // local module of file based module

// function sayHello(userName) {
// 	console.log(`Hello ${userName}!`)
// }

// module.exports = sayHello

// const a ={
//        average: (a,b) => {
//         console.log((a+b) / 2);
//        },
//        percentage: (a,b) => {
//         console.log((a+b) * 100);
//        },
// };

// module.exports = a;

                     // core module or built in 

// const fs = require("fs");
// console.log(fs);

// const fs = require("fs");

// fs.readFile("./sample.txt", "utf-8", (err,data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });


// const fs = require("fs");

// const a = "deepak singh"
//  fs.writeFile("./sample2.txt", a );

// fs.writeFile("./sample2.txt", a , () => {
//     console.log("written");
// });

// writeFileSync - it is used for synchronous behaviour


// const path = require("path");

// const a = path.extname("/node/index.js")
// console.log(a);

// const os = require("os");
// console.log(os.hostname());


                // third party module
// const pokemon = require("pokemon");
// console.log(pokemon.random());



               //   creating a server
// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.end("working");
// });

// server.listen(4000,"localhost", () => {
//       console.log("server is working on http://localhost:4000");
// });


// good practice for creating a server
const http = require("http");

const PORT = 2000;
const hostname = "localhost";

const server = http.createServer((req,res) =>{
    console.log(req.url);
    res.end("working");
});

server.listen(PORT,hostname, () => {
      console.log(`server is working on http://${hostname}:${PORT}`);
});
