const capitalize = require('./capitalize');
const fs = require('fs');
// console.log(capitalize("tom"));

// console.log(process.env)

fs.readFile('./users.json', 'utf8',(err, data) => {
    const myFile = JSON.parse(data);
    console.log(myFile[0].id);
    console.log(typeof(myFile));
    console.log(typeof(data));
})