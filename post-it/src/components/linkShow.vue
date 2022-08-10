<template>
    <router-link :to="{name: 'ShowView', params: {id: idPostit}}" ><button type="button" class="btn btn-info">See post-it</button></router-link>
   <!-- <router-link :to="{name: 'confirmDeleteView', params: {id: idPostit}}" ><button type="button" class="btn btn-danger">Delete post-it</button></router-link>-->
    <!--<a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" v-on:click="deleteOnePostit(idPostit)">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </a>-->
</template>


<script>


export default{
    name: 'linkShow',
    props: ["idPostit"],
     
}

      

</script>


<style>

</style>