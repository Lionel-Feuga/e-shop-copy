<script setup>
import { VApp, VContainer, VRow, VCol } from 'vuetify/components'
</script>

<template>
  <header>
    <v-row class="justify-space-around" style="height: 72px;">
      <v-col cols="3" class="d-flex align-end ga-8">
        <div class="main-font pt-2" style="height: 59px;">MATOU OBESE</div>
        <div style="text-decoration: underline;">HOMME</div>
        <div><router-link to="/Femme">FEMME</router-link></div>
      </v-col>
      <v-col cols="5" class="d-flex align-end justify-center ga-5">
        <div class=""><router-link>ESHOP </router-link></div>
        <div class="px-2" style="background-color: #ffc73c; height: 27px"><router-link>LES BASKETS TRIPLE A </router-link></div>
        <div class=""><router-link>AGENDA </router-link></div>
        <div class=""><router-link>LE MAGASIN </router-link></div>
        <div class=""><router-link>LA MARQUE </router-link></div>
      </v-col>

      <v-col cols="3" class="d-flex align-end justify-end ga-5 mr-5" style="font-size: 1rem;">
        <div class="d-flex flex-column align-center">
          <div><font-awesome-icon :icon="['fas', 'circle-info']" /></div>
          <div>infos</div>
        </div>
        <div class="d-flex flex-column align-center">
          <div><font-awesome-icon :icon="['fas', 'user']" /></div>
          <div>SE CONNECTER</div>
        </div>
        <div class="d-flex flex-column align-center">
          <div><font-awesome-icon :icon="['fas', 'cart-shopping']" /></div>
          <div>SE PANIER</div>
        </div>
      </v-col>
    </v-row>
  </header>
</template>

<style scoped></style>
