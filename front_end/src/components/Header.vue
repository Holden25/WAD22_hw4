<template>
    <nav>
        <div id="navigation">
            <router-link to="/" id="home">Home</router-link>
            <router-link to="/about" id="contact">Contacts</router-link>
        </div>
        <!--<img class = "icon" id="profile_pic" src="../assets/me.png" alt="profile picture">-->
    </nav>
</template>
    
<script>
    export default {
        name : "Header"
    }
</script>

<style scoped>
nav {
    width: 100%;
    /* flex settings*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#home {
    color: #FF7D00;
}
#contact {
    color: #FFECD1;
}
.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}
a {
    color: #000000;
    text-decoration: none;
}
.template {
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: .5em;
    background-color: #001524;
    position: sticky;
    top: 0;
    border-radius: 5px;
}
</style>