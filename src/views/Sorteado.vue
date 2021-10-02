<template>

  <div class="container">
      <SortButton/>
    <v-card color="gray darken-4" class="mx-auto card" >
      <v-img
        src="https://s.aficionados.com.br/imagens/fullmetalbrotherhood_cke.jpg"
        height="150px"
      ></v-img>

      <v-card-title class="title" > Animes </v-card-title>

      <v-card-subtitle class="subtitle" color="gray darken-4"> Veja aqui uma seleção de animes para você. </v-card-subtitle>

      <v-card-actions>
        <router-link to="/animes">
          <v-btn color="gray darken-4" class="btn" text> Explorar </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <v-card color="gray darken-4" class="mx-auto card" >
      <v-img
        src="https://cdn.ligadosgames.com/imagens/zelda-oot.jpg"
        height="150px"
      ></v-img>

      <v-card-title class="title" > Jogos </v-card-title>

      <v-card-subtitle class="subtitle" color="#212121"> Veja aqui uma seleção de jogos para você. </v-card-subtitle>

      <v-card-actions>
        <router-link to="/jogos">
          <v-btn color="gray darken-4" class="btn" text> Explorar </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <v-card color="gray darken-4" class="mx-auto card" >
      <v-img
        src="https://www.setembroamarelo.org.br/wp-content/themes/recibo/images/celular-cvv-setembro-amarelo.jpg"
        height="150px"
      ></v-img>

      <v-card-title class="title" > Setembro Amarelo </v-card-title>

      <v-card-subtitle class="subtitle" color="gray darken-4"> Saiba mais informações sobre o setembro amarelo. Como previnir o suícidio e como cuidar da sua saúde mental. </v-card-subtitle>

      <v-card-actions>
        <router-link to="/setembroamarelo">
          <v-btn color="gray darken-4" class="btn" text> Explorar </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
    name: 'Sorteado',
}
</script>
<style scoped>
text{
  font-weight: bold;
}
.container{
  color:#FFAB00;
}
.card{

  color:#FFAB00;
  max-width:90vw;
  margin: 10px 0;
  max-height: 350px;
  font-weight: bold;

}
.btn{
  background-color:#FFAB00 ;
  color: #212121;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
}
.title{
  color:#FFAB00;
  font-weight: bold;
}
.subtitle{
  color:#FFAB00;
  font-weight: 500;
}
a{
  text-decoration: none;
}
</style>