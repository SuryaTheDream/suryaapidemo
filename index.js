const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT  || 4000  ;

const apidata = require("./data.json");

app.get("/" , (req , res) => {
    res.send("Hello I am Alive Don");
});

app.get("/service" , (req,res) => {
    res.send(apidata);  

})

app.listen(port , () => {
    console.log("Jai Shri Ganesh...");

});