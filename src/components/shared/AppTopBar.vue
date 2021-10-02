<template>
    <div class="app-top-bar">
        <v-app-bar color="amber accent-4" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Random/></v-toolbar-title>
        </v-app-bar>
         
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="amber--text text--accent-4">
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/anime"> 
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-television</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Animes</v-list-item-title>
                    </v-list-item>
                    </router-link>
                    <router-link to="/jogos">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-controller-classic</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Jogos</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/setembroamarelo">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-lifebuoy</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Setembro Amarelo</v-list-item-title>
                    </v-list-item>
                    </router-link>
                    <router-link to="/about">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-information</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Sobre</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
     </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
        drawer: false,
        group: null
    }),
}
</script>

<style scoped>
.app-top-bar a {
    text-decoration: none;
}
</style>