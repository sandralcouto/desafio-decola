<template>

  <div> 
<div v-for="anime of animes" :key="anime.id"> 
    <v-card
    class="mx-auto card"
  >
    <v-img
      :src="anime.photo"
      height="200px"
    ></v-img>

    <v-card-title>
     {{anime.name}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
    
      Informação
      </v-btn>
  
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider>
      
        </v-divider>

        <v-card-text>
        <p>
         Status: {{anime.status}}
        </p>
        <p>Gênero: {{anime.genre}} </p>
       
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  </div>
</template>

<script>
   export default { name: "Animes",
    data: () => ({
      show: false,
      animes:[] 

    
    }), 
    created() {
      fetch ("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then(resposta => resposta.json())
      .then(json => {
        this.animes = json;
        console.log(this.animes) 
      })
    }
  }
</script>

<style scoped>
 .card{margin: 30px 0px; max-width: 90vw}; 
</style> 