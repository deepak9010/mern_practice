const mongoose = require("mongoose");
// below sample is our new databse name
mongoose.connect("mongodb://127.0.0.1:27017/sample" ,  {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to Mongodb successfully")
}).catch((err)=>{
    console.log(err);
})

// make a schema
const student = new mongoose.Schema({
    name: String,
    // name : {type: String, required: true}
    workout: Boolean,
    height: Number
});

//now make a model,model is lika a collection 
const Student = new mongoose.model("Student",student);

// const adder = async ()=>{
    
// //    const ss = new Student({
// //        name: "DeepakSingh",
// //        workout: true,
// //        height:6
// //     })

// //     await ss.save();

// // instead of these above lines we can also write like this
//         const ss = await Student.create({
//             name: "Deep",
//             workout: true,
//             height:5

// })

// // // for read
// //       const ss = await Student.find();
// //       console.log(ss);
    


// }

// adder();


// camparison operator

const adder = async ()=>{
    
   
          const ss = await Student.find({height:{$eq:6}});
          console.log(ss);
        
        //   const ss = await Student.find({height:{$nin:[5,6]}});
        //   console.log(ss);
        
    }
    // other operators are -> gt,gte,lt,lte,ne,fn
    adder();
