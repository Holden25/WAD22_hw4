<template>
    <div>
        This is a post
    </div>
    <article class = "post">
        <div class = "post_header">
            <img class = "icon" src="@/assets/me.png" alt="profiil">
            <p> {{passedpost.date}}</p>
        </div>
        <!--images are not loading for some reason didnt find fix yet-->
        <img v-if="passedpost.picture" style="max-width: 60% ;" v-bind:src="passedpost.picture" alt="pilt">
        <!--this is just to check that the path is correct but images not working for some reason-->
        <span>{{passedpost.picture}}</span>
        <p> {{passedpost.body}}</p>
        <img @click="count++"     class="icon" src="@/assets/like_button.jpg" alt="like button">
        <span> {{count}}</span>
    </article>
</template>

<script>
import { computed } from '@vue/reactivity';
    export default {
        name : "Post",
        props: {
            passedpost : Object,
        },
        data: function(){
            return{
                count: 0,
            }
        },
    }
</script>

<style scoped>
.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}
.post_header {
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0.5em;
    min-height: fit-content;
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