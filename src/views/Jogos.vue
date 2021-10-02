<template>
    <div class="jogo">
        <h1 class="text-center">Jogos</h1>
        <div class="container">
            <div v-for="jogo of jogos" :key="jogo.id">
                <v-card color="gray darken-4" class="mx-auto card" >
                    <v-img height="250" :src="jogo.photo" :alt="jogo.name"></v-img>
                    <v-card-title class="title">{{jogo.name}}</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <div class="grey--text">
                            {{jogo.year}}
                            </div>
                        </v-row>
                        <div class="my-4 text-subtitle-1" color="gray darken-4">
                            <h5>Gênero</h5>
                            <span class="text-subtitle">{{jogo.genre}}</span>

                            <h5>Plataforma</h5>
                            <div>
                                {{jogo.platform}}
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Jogos',
    data() {
        return {
            jogos: []
        }
    },
    created() {
        fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
        .then(response => response.json())
        .then(json => {
            this.jogos = json;
        });
    }
}
</script>

<style scoped>
h1 {
    color: #FFAB00;
}

.card{
  color:#FFAB00;
  max-width:90vw;
  margin: 10px 0;
  font-weight: bold;
}
</style>