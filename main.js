const fs = require('fs');

const filePath = process.argv[2];

// function readFileAsync(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(`Error reading file ${filePath}: ${err}`);
//         return;
//       }
//       resolve(data);
//     });
//   });
//}
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${filePath}: ${err}`);
        process.exit(1);
      }
      resolve(data);
    });
  });
}

function modifyText(text) {
  return new Promise((resolve, reject) => {
    // TODO: Convert text to uppercase and reverse it
    try {
      const modifiedText = text.toUpperCase().split('').reverse().join('');
      resolve(modifiedText);
    } catch (error) {
      reject(error);
    }
  });
}

readFileAsync(filePath)
  .then((data) => modifyText(data))
  .then((modifiedText) => {
    console.log(modifiedText);
  })
  .catch((error) => {
    console.error(error);
  });
