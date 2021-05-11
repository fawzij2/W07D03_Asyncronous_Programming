const express = require("express");
const axios = require("axios");
const fs = require("fs");
const { response } = require("express");

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

const writeFile = () => {
    fs.writeFile("text.txt", "A new file has been created", (err)=>{
        if (err) throw err;
        console.log("The file has been saved");
    })
};

const getPost = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
        console.log(response.data);
    })
    .catch((err)=>{
        throw err
    })
  };

const getPostAsync = async (data) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`)
        console.log(`response.data`);
    } catch (err){
        throw err
    }
};

app.listen(PORT, ()=>{
    console.log("hello world");
})