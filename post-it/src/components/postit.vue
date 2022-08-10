<script>

import linkShow from '@/components/linkShow.vue'

export default{
    name:"Postit",
    props:["id", "titre", "contenu", "couleur"],
    components: {
        linkShow
    },

    methods:{
    
deleteOnePostit(idpostit){

    let postits = JSON.parse(localStorage["postits"]);
              console.log(postits)

          var removeIt = confirm('Êtes vous sûr de vouloir supprimer le post-it ?');
        if (removeIt) {
        //  const postitIndex = this.postit.indexOf(postit);
          postits.splice(idpostit, 1);
          localStorage["postits"] = JSON.stringify(postits);
          console.log(postits)
        //  this.savePostit();
          alert('Post it supprimé!');
        }
      }
    }
}
</script>


<template>
  

<div id="postit" :style="'background-color:' + couleur">

    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 160px; color:black" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" v-on:click="deleteOnePostit(idPostit)">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </a>

    <h1 class = "police">{{titre}}</h1>
    <p class = "contenu">{{contenu}}</p>
    <linkShow :idPostit=id />
</div>

</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Roboto:wght@100&display=swap');

#postit
{
    /* background-color: #EFE4B0; */
    display: flex;
    align-items: center;
    width: 200px;
    height: 200px;
    margin-bottom: 40px;
    font-family: 'Indie Flower', cursive;
    align-content: center;
    flex-direction: column;

    
}

.police{
    text-decoration: underline;
    
}

.contenu{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}



</style>