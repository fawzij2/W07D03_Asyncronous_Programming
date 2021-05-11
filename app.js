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
        console.log(response.data);
    } catch (err){
        throw err
    }
};

const appendToFile = (data) => {
    fs.appendFile("data.txt", data, (err)=>{
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
}

const copyFile = (fileName) => {
    fs.copyFile(fileName, `copy_of_${fileName}`, (err)=>{
        if (err) throw err;
        console.log(`done`);
    })
};

const post1 = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    userId: 1,
  });
  
  const createPost = (post) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", post)
    .then ((response)=>{
        // parseResponse=JSON.parse(response.data)
        console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  };
  
createPost(post1);

app.listen(PORT, ()=>{
    console.log("hello world");
})