const path=require('path')

console.log(path.sep);

const filepath=path.join('/node1','3-os.js')
console.log(filepath);

console.log(path.basename(filepath))
 
const absolute=path.resolve(__dirname, '3-os.js')
console.log(absolute);
