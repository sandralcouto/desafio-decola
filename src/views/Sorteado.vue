<template>
  <div class="Sorteado">
    <h1 class="text-center">Jogo Sorteado!</h1>
    <div class="container">
      <h3>Aqui está nossa recomendação para você.</h3>
      <v-card color="gray darken-4" class="mx-auto card">
        <v-img height="250" :src="jogos[0].photo" :alt="jogos[0].name"></v-img>
        <v-card-title class="title">{{ jogos[0].name }}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <div class="grey--text">
              {{ jogo[0].year}}
            </div>
          </v-row>
          <div class="my-4 text-subtitle-1" color="gray darken-4">
            <h5>Gênero</h5>
            <span class="text-subtitle">{{ jogo[0].genre }}</span>

            <h5>Plataforma</h5>
            <div>
              {{ jogo[0].platform }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sorteado",
  data() {
    return {
      jogos: [],
    };
  },
  created() {
    fetch(
      `https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos/${Math.floor(
        Math.random() * 10 + 1
      ) + ""}.json`
    )
      .then((response) => response.json())
      .then((json) => {
        this.jogos = json;
      });
    console.log(Math.floor(Math.random() * 10 + 1));
  },
};
</script>

<style scoped>
h1 {
  color: #ffab00;
}

.card {
  color: #ffab00;
  max-width: 90vw;
  margin: 10px 0;
  font-weight: bold;
}
</style>
