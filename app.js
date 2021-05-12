const express = require("express");
const axios = require("axios");
const fs = require("fs");
const { response, json } = require("express");
const { throws } = require("assert");

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

// Practice
// 1.
const appendToFile = (data) => {
    fs.appendFile("data.txt", data, (err)=>{
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
}

// 2. 
const copyFile = (fileName) => {
    fs.copyFile(fileName, `copy_of_${fileName}`, (err)=>{
        if (err) throw err;
        console.log(`done`);
    })
};

// 3. 
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

// 4.
const newPost = JSON.stringify({
    // the post id that we want to update, change it when trying to update another post
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
});

const updatePost = (postId, data) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`,data)
    .then((response)=>{
        console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
};

// 5. 
const getUsers = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{console.log(response.data);})
    .catch((err) =>{console.log(err);})
  };



// 6.
const saveUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{
        const response_string = JSON.stringify(response.data);
        const response_string2 = JSON.parse(response_string)
        console.log(response_string2);
        fs.writeFile("users.txt", response_string, (err)=>{
            if (err) throw err;
            console.log('The data was added to file!');
        });
    })
    .catch((err)=>{
        console.log(err);
    })
  };

saveUsers();

app.listen(PORT, ()=>{
    console.log("hello world");
})