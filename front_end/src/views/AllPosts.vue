<template>
<div id="flex_container">

<Header/>

<div id = "main_section">
    <aside class = "sidebar">
        <!--boxis on the sides-->
    </aside>

    <main> <!--this is where all the posts go-->
        <!--trying to make posts dynamically using post compo-->
        <Post class = "post"  v-for="post in postList" :key="post.id" :passedpost=post />
      <!--trying to make posts dynamically, not using compo (in the end in homework we have to use comp)-->
        <article class = "post" v-for="post in postList" :key="post.id">
          <div class = "post_header">
                <img class = "icon" src="@/assets/me.png" alt="profiil">
                <p> {{post.date}}</p>
          </div>

            <!--images are not loading for some reason didnt find fix yet-->
            <img v-if="post.picture" style="max-width: 60% ;" v-bind:src="post.picture" alt="pilt">
            <span>{{post.picture}}</span>
            <p> {{post.body}}</p>
            <img class  = "icon" src="@/assets/like_button.jpg" alt="like button">
        </article>
    </main>

    <aside class = "sidebar">
        <!--boxis on the sides-->
    </aside>
</div>

<Footer/>

</div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Post from "@/components/Post.vue";
export default {
  name: 'HomeView',
  components: {
    Header, Footer, Post
  },
  computed: {
    postList(){
      return this.$store.state.posts
    }
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
    background-color: darkgray;
    /* flex settings*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sidebar {
    border-radius: 5px;
    background-color: darkgrey;
    flex: 1;
}
.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}
main article {
    border: 0.2em solid black;
    border-radius: 5px;
    margin: 0.5em 0.1em;
}
.post_header {
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0.5em;
    min-height: fit-content;
}
main {
    padding: 3%;
    margin: 0em 1em;
    background: darkgray;
    border-radius: 5px;
    flex: 3;
    overflow: auto;
    height: 80vh;
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