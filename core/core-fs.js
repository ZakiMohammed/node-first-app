const fs = require('fs')
const path = require('path')

const sampleFile = path.join(__dirname, 'assets', 'sample.txt');

fs.writeFile(sampleFile, 'Hello World', (err) => {
    if (err) {
        console.log('Error occurred', err);
    }
    console.log('File created')
});

fs.readFile(sampleFile, 'utf-8', (err, data) => {
    if (err) {
        console.log('Error occurred', err);
    }
    console.log('File', data)
})