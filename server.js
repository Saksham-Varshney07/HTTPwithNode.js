const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) =>{
    const url = req.url;

    let filePath = '';
    let statusCode = 200;

    if(url === '/'){
        filePath = path.join(__dirname,'pages','home.html');
    }
    else if(url==='/about'){
        filePath= path.join(__dirname,'pages','about.html');
    }
    else if(url=== '/contact'){
        filePath=path.join(__dirname,'pages','contact.html');
    }
    else {
        statusCode =404;
        filePath = path.join(__dirname,'pages','404.html')
    }

    fs.readFile(filePath, (err,data) => {
        res.writeHead(statusCode , { 'Content-Type': 'text/html'});
        res.end(data);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});