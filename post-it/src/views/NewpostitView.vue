<template>
<div style="display:block;">

<form>
  <fieldset>

    <legend class="police">Add a post-it</legend>
  
    <div class="form-group police">
      <label for="exampleInputEmail1" class="form-label mt-4">Title</label>
      <input class="form-control" v-model="title" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title">
    </div>

    <div class="form-group police">
      <label for="exampleTextarea" class="form-label mt-4">Textarea</label>
      <textarea v-model="contenu" class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
  </fieldset>
</form>

<br>
<div style="display:inline-flex;">
  <a href="/"><button v-on:click = "savePostIt()" type="button1" class="btn btn-outline-success">Submit<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
    </svg></button></a>

   <div style="width:10px;"></div> 

  <a href="/"><button type="button2" class="btn btn-outline-primary">Home  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
    <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"/>
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
    </svg></button></a>
  </div>
</div>



</template>



<script>

  export default {
    data(){
      return {
      postits: [],
      title: "",
      contenu: "",
    }
    },

    methods: {
      savePostIt() {
        let postits = JSON.parse(localStorage["postits"]);
        let id = postits.length;
        postits.push({id: id,
        titre: this.title,
        contenu: this.contenu,
        couleur: "rgb(239, 248, 176)"});
        localStorage["postits"] = JSON.stringify(postits);
      }
    }
  }
  


</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Roboto:wght@100&display=swap');

.police{

    font-family: 'Indie Flower', cursive;
    font-size: x-large;
}

/*.button1{
    
    background-color: aquamarine;
}

.button2{

    margin-top: 5px;
}*/

</style>