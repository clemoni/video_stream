const express = require("express");

const fs = require("fs");

const app = express();

// if (!process.env.PORT) {                                              
//     throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");      
// }      

app.get("/video", (req, res) => {  

    const path = "./videos/SampleVideo_1280x720_1mb.mp4";  

    fs.stat(path, (err, stats) => { 

        if (err) {                                
            console.error(`An error occurred ${err}`);
            res.sendStatus(500);
            console.log(err)
            return;
        }                                         
        res.writeHead(200, {                      
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });                                       
        fs.createReadStream(path).pipe(res);      
    });

    // res.send('hell')
});


const PORT = process.env.PORT | 3000;                                         

app.listen(PORT, () => {                                               
    console.log(`Service listening on port ${PORT}!`);
})