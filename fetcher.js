const request = require('request');
const fs = require('fs');


const pageToDownload = process.argv[2];
const writeFilePath = process.argv[3];

console.log(pageToDownload, writeFilePath);

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats["size"]
  return fileSizeInBytes
}

request(pageToDownload, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
  fs.writeFile(writeFilePath, body, function (err) {
    if (err) return console.log(err);
    console.log('success!')
    const size = getFilesizeInBytes(writeFilePath);
    console.log(size);
  });
  
});
