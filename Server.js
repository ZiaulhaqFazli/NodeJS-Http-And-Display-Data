//Http module for Send Request & Receive Response
const http = require('http');
//File System module for different file operations.
const fs = require('fs');

//Create a Runtime Server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

// ----------------------------------------
//Writing data by using response.
// ----------------------------------------
    //Set Response Header Content Type
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="#"/ ></head>');
    res.write('<p> Hello </p>');
    res.write('<p> Developers! </p>');
    res.end();

// ----------------------------------------
//Writing data by using read file method of file system.
// ----------------------------------------
    fs.readFile('index.html', (error, data) => {
        if(error){
            console.log(error);
        }
    //Write the html file as a response and display in browser.
    res.write(data);
    res.end();
    
    })


    
});

//Access server on http://localhost:3000
server.listen(3000, 'localhost', () => {
    console.log("Working");
});