<template>
    <div class="form">
      <h3>Add a Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <button @click="addPost" class="addPost">Add Post</button>
    </div>
  </template>
  
  <script>
  import auth from "../auth.js"
  export default {
    name: "AddPost",
    data() {
      return {
        post: {
          body: "",
        },
      };
    },
    methods: {
      async addPost() {
        let currentDate = new Date().toJSON().slice(0, 10);
        var data = {
          //title: this.post.title,
          body: this.post.body,
          date: currentDate,
          //urllink: this.post.urllink,
        };
        let authResult = await auth.authenticated();

        //check if user has valid token
        if(authResult){

        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });

        //if user dosent have valid token route to login page
        }else{
          console.log("user not authenticated")
          this.$router.push("/login")
        }

      },
    },
  };
  </script>
  
  <style scoped>
  .form {
    max-width: 420px;
    margin: 30px auto;
    background: #001524;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    color: #FFECD1;
  }
  label {
    color: #FFECD1;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    color: #78290F;
  }
  button {
    background: #FF7D00;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: #FFFFFF;
    border-radius: 20px;
    align-items: center;
    text-align: center;
  }
  </style>