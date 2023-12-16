const mongoose = require('mongoose');
// const url="mongodb://127.0.0.1:27017/issue-tracker-db";
const uri="mongodb+srv://asta_manu:mlsnothim%40h1M@clustermanu.zdqvp8j.mongodb.net/?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(uri);
  
}

main()
.then(()=>{
    console.log("Sucessfully Connected to Database");
})
main().catch(err => console.log("Error Connecting To Database ",err));
