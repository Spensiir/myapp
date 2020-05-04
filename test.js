const path = require("path");
const fs = require("fs");

console.log("__filename: " + __filename);
console.log("__dirname: " + __dirname); 
console.log("basename: " + path.basename(__filename));

// console.log("fs.readdirSync(__dirname) and filter out files with . at the start - output= " + 
// 	fs
// 		.readdirSync(__dirname)
// 		.filter(file => {
// 			return (file.indexOf('.') !== 0) 
// 			&& (file !== path.basename(__filename))
// 		})
// 		.forEach(file=>{return console.log(file)})
// 	);

//console.log("trying out slice for file: " + fs.readdirSync(__dirname).filter(file=>{return file.slice()}))

	fs
		.readdirSync(__dirname)
		.filter(file => {
			//return (file.indexOf('.') !== 0) 
			//&& (file !== path.basename(__filename))
			return (file.slice(-3) == ".js")
		})
		.forEach(file=>{return console.log(file)})

