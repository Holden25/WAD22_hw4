<template>
<div id="flex_container">

<Header/>

<button  @click="Logout" class="button" id="logout">Logout</button>

<div id = "main_section">
    <aside class = "sidebar">
        <!--boxis on the sides-->
    </aside>

    <main> <!--this is where all the posts go-->


    <div id="post-list">
    <h1>All Posts</h1>
      <!--ul-->
        <div class="item" v-for="post in posts" :key="post.id">
          <!--<p>{{post.id}}</p>-->
          <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
          <a class="singlepost" :href="'/api/apost/' + post.id">
            <div class="title"> <b>Date:</b> {{ post.date }} </div><!--br /-->
            <div class="body"> <b>Post: </b> {{ post.body }} </div> <!--br /-->
          </a>
        </div>
      <!--/ul-->
    </div>


    <button  @click="AddPost" class="button">Add post</button>
    <button  @click="DeleteAll" class="button">Delete all</button>



    </main>

    <aside class = "sidebar">
        <!--boxis on the sides-->
    </aside>
</div>

<Footer/>

</div>
</template>

<script>
import { onMounted } from "vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";


export default {
  name: 'HomePage',

  data() {
    return {
      posts: [],
    };
  },

  components: {
    Header, Footer
  },

  methods: {
    fetchPosts() {
      // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },

    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    AddPost(){
      console.log('moving to addpost');
      this.$router.push("/api/AddPost");
    },

    DeleteAll(){
      fetch(`http://localhost:3000/api/delete`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      window.location.reload()
    }


  },

  mounted(){
    // call fetchPosts() when this element (Homepage) mounts 
    this.fetchPosts();
    console.log("mounted");
    //console.log(post.id);
  }

}
</script>

<style>
/* whole page */
#flex_container{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    height: 100%;
}


/* the middle section */
#main_section{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    flex: 4;
    margin: 1em 0em;
}

nav {
    width: 100%;
    border-radius: 5px;
    background-color: #001524;
    /* flex settings*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sidebar {
    border-radius: 5px;
    background-color: #001524;
    flex: 1;
}
.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}
main article {
    border: 0.2em solid #001524;
    border-radius: 5px;
    margin: 0.5em 0.1em;
}
.post_header {
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0.5em;
    min-height: fit-content;
}
.item {
    background-color: #FF7D00;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
}
.singlepost {
    text-decoration: none;
    color: white;
}
.title {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
    text-align: right;
}
.body {
    padding-left: 10px;
    padding-bottom: 15px;
    text-align: left;
}
main {
    padding: 3%;
    margin: 0em 1em;
    background: #001524;
    border-radius: 5px;
    flex: 3;
    overflow: auto;
    height: 80vh;
}

h1 {
    color: #FFECD1;
}

.button {
    background-color: #FF7D00;
    color: #FFFFFF;
    border: #FF7D00;
    border-radius: 5%;
    height: 30px;
    margin: 5px;
}

#logout {
    border-radius: 0.3em;
}

div + img{
    margin: auto;
    display: block;
}
div ~ p{
    color: rgb(43, 41, 41);
}
div > p{
    color:darkblue;
}
</style>