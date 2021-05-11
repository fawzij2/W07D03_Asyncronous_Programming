const express = require("express");
const axios = require("axios");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

const readFile = () => {
    fs.readFile("data.txt", (err,data)=>{
        if (err) throw err;
        content = data.toString();
        console.log(content);
    })
  };

app.listen(PORT, ()=>{
    console.log("hello world");
})