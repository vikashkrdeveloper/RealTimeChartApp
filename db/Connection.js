const mongoose=require('mongoose');
const DATABASE_ADDRESS=process.env.DATABASE_ADDRESS;
const connection=mongoose.connect(DATABASE_ADDRESS);
connection.then(()=>{
    console.log('DataBase Connected....');
}).catch(()=>{
    console.log('DataBase not Connected ! ');

})


module.exports=mongoose;