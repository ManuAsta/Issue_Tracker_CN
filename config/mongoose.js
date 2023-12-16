const mongoose = require('mongoose');


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/issue-tracker-db');
}

main()
.then(()=>{
    console.log("Sucessfully Connected to Database");
})
main().catch(err => console.log("Error Connecting To Database ",err));
