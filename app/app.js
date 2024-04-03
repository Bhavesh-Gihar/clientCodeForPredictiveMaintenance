const fs = require('fs');


function appendToFile() {
    const text = "hi\n";
    fs.appendFile('example.txt', text, (err) => {
        if (err) throw err;
        console.log('Text appended to file');
    });
}

fs.writeFile('example.txt', '', (err) => {
    if (err) throw err;
    console.log('File created');

    setInterval(appendToFile, 10000);
});
