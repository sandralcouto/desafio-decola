<template>
  <div class="about">
    <h1>Sobre nós</h1>
    <div class="container">
      <div class="titulos">
        <v-container>
          <p></p>
          <h3>De onde viemos?</h3>
          <p>
            Decidimos criar a Random/> porque acreditamos que a cultura é
            essencial para manter a mente ativa e saudável, especialmente em
            tempos tão difíceis como a pandemia de Covid-19.
          </p>
          <p>
            Assim, Random/> é a nossa proposta para você, que quer ter acesso a indicações de Animes e Jogos com apenas um clique.
          </p>
        </v-container>

        <v-container>
          <p></p>
          <h3 class="m-top">Quem está conosco?</h3>
          <p>
            A equipe que atua no projeto é composta por Ananda Bastida Borges,
            Gabriela Garcia de Abreu, Laura Negreiros Naves, Sandra Larissa
            Marques Couto.
          </p>
        </v-container>
      </div>

      <div class="integrantes">
        <div class="pessoa">
          <h3>Ananda</h3>
          <p>Animes/jogos que curte!</p>
        </div>

        <div class="pessoa">
          <h3>Gabriela</h3>
          <p>Animes/jogos que curte....</p>
        </div>
      </div>

      <div class="integrantes">
        <div class="pessoa">
          <h3>Laura</h3>
          <p>Animes/jogos que curte....</p>
        </div>
        <div class="pessoa">
          <p></p>
          <h3>Sandra</h3>
          <p>Animes/jogos que curte....</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  width: 100%;
  max-width: 1200px;
  padding: 25px;
  text-align: justify;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 25px;
  text-align: justify;
}

.container div.titulos h3 {
  margin-bottom: 10px;
}

.integrantes {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.pessoa {
  width: 50%;
  padding: 20px;
}

.pessoa h3 {
  margin-bottom: 10px;
}

.m-top {
  margin-top: 5px;
}

@media (max-width: 900px) {
  .pessoa {
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    align-items: center;
  }
}
</style>
