<template>

  <Createpostit />

  <div id="postits">
    <div v-for="p in postits" v-bind:key="p.titre">
      <Postit :id=p.id :titre=p.titre :contenu=p.contenu :couleur=p.couleur />
    </div>
  </div>

  
</template>

<script>
  import Postit from '@/components/postit.vue'
  import Createpostit from '@/components/createpostit.vue'
  

  export default
  {

    name: 'HomeView',
    data: function(){
      return {
        postits: JSON.parse(localStorage["postits"])
      }
    },
    components:{
      Postit,
      Createpostit
    },
  }


</script>

<style>

  #postits
  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Roboto:wght@100&display=swap');

.police{

    font-family: 'Indie Flower', cursive;
    font-size: x-large;
}

</style>