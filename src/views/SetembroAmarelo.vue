<template>
  <div class="container">
      <h1>Setembro Amarelo</h1>
    <div v-for="setembro of setembros" :key="setembro.id">
      <v-card class="mx-auto card" >
        <v-img
          :src="setembro.imagem"
          :alt="setembro.categoria"
          height="200px"
        ></v-img>

        <v-card-title class="title">
          {{ setembro.nome }}
        </v-card-title>
        <!-- <div v-for="(setembro,index) of setembros" :key="setembro[index].categoria"> -->
      <v-card-subtitle>Categorias: {{setembro.categoria}}</v-card-subtitle><!-- </div> -->

        <v-card-actions >
          <v-btn color="amber accent-4" text> Descrição </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            
            <v-card-text>
                <p>Tipo: {{setembro.tipo}}</p>
              {{ setembro.descricao }}
            </v-card-text>
            <v-btn color="amber accent-4 btn" text> <a class="btn" :href="setembro.link">Ver Site</a> </v-btn>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "SetembroAmarelo",
  data: () => ({
    show: false,
    setembros: [],
  }),
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => response.json())
      .then((json) => {
        this.setembros = json;
      });
  },
};
</script>
<style scoped>
.container{
  color:#FFAB00;
}
.card{
  color:#FFAB00;
  max-width:90vw;
  margin: 10px 0;
  font-weight: bold;
  padding:0 0 10px 0px;

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
div a{
  text-decoration: none;
}
</style>
