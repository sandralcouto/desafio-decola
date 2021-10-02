<template>
  <div class="about" color="gray darken-4">
    <h1>Sobre nós</h1>
    <div class="container">
      <v-img
        src="data:image/png;base64,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"
        height="150px"
      ></v-img>
      <div class="titulos">
        <v-container color="gray darken-4">
          <p></p>
          <h3>De onde viemos?</h3>
          <p>
            Decidimos criar a Random/> porque acreditamos que a cultura é
            essencial para manter a mente ativa e saudável, especialmente em
            tempos tão difíceis como a pandemia de Covid-19.
          </p>
          <p>
            Assim, Random/> é a nossa proposta para você, que quer ter acesso a
            indicações de Animes e Jogos com apenas um clique.
          </p>
        </v-container>

        <v-container color="gray darken-4">
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
          <p>
            Gabriela não assiste animes, mas curte demais Doramas! Apesar de não
            fazerem parte do escopo do projeto, Doramas são muito legais também
            e a gente não podia deixar de citar. A recomendação de Dorama de
            hoje é o Miss Sunshine "Um Raio de Sol", o qual trata sobre a
            invasão japonesa em terras coreanas. Como jogo, Gabriela recomenda
            Dusk Wood, um jogo de aplicativo que contém muuuitos mistérios e
            você, como jogador, é peça fundamental da história.
          </p>
          <ul>
            <li>Miss Sunshine "Um Raio de Sol" - Netflix</li>
            <li>Dusk Wood - App Store</li>
          </ul>
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
          <p>
            Sandra curte diversos tipos de animes e jogos de RPG single player.
            Como anime, ela deixa de recomendação The Promised Neverland, um
            anime de ficção científica distópica que trata sobre a vida de
            diversas crianças que vivem em um orfanato. Como recomendação de
            jogo, recomenda que quem ainda não jogou Witcher 3 não perca tempo e
            vá baixar logo esse jogaço :D
          </p>
          <ul>
            <li>The Promised Neverland - Netflix</li>
            <li>Witcher 3 - Steam</li>
          </ul>
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
  text-align: center;
  color: #ffab00;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 25px;
  text-align: justify;
}

.container div.titulos h3 {
  margin-bottom: 10px;
  color: #ffab00;
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
  color: #ffab00;
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
