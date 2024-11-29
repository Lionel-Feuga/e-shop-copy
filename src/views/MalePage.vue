<script setup>
import { VRow, VCol } from 'vuetify/components'
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2024-12-04T22:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let intervalId = null

function updateCountdown() {
  const now = new Date()
  const difference = targetDate - now

  if (difference <= 0) {
    clearInterval(intervalId)
    days.value = hours.value = minutes.value = seconds.value = 0
    return
  }

  days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="malePage-landingZone d-flex align-end justify-space-between">
    <v-row class="left-part mb-10 mx-5">
      <v-col class="ms-5">
        <p class="regular-text" style="color: white">Cette semaine uniquement !</p>
        <p class="main-font mb-4" style="color: white; font-weight: 400">LE PULL CAMIONNEUR</p>
        <p
          class="main-font py-1 px-8"
          style="
            color: white;
            background-color: #002e5d;
            width: fit-content;
            font-size: 1.3rem;
            font-weight: 100;
          "
        >
          JE RESTE AU CHAUD <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </p>
      </v-col>
      <v-vol>
        <div class="countdown mb-5 me-10">
          <div class="d-flex justify-end">
            <div class="preco-text d-flex align-center ga-2 px-4">
              <font-awesome-icon :icon="['fas', 'stopwatch']"  /> Fin de la préco dans
            </div>
          </div>
          <!-- <div class="preco-text pa-2"><font-awesome-icon :icon="['fas', 'stopwatch']" /> Fin de la préco dans</div>
          <p>{{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }} </p>
          <p>JOURS </p> -->
          <div class="d-flex ga-5" style="font-size: 1rem">
            <v-vol class="text-center">
              <div class="number">{{ days }}</div>
              <div class="number-text">JOURS</div></v-vol
            >
            <v-vol class="text-center">
              <div class="number">{{ hours }}</div>
              <div class="number-text">HEURES</div></v-vol
            >
            <v-vol class="text-center">
              <div class="number">{{ minutes }}</div>
              <div class="number-text">MINUTES</div></v-vol
            >
            <v-vol class="text-center">
              <div class="number">{{ seconds }}</div>
              <div class="number-text">SECONDES</div></v-vol
            >
          </div>
        </div>
      </v-vol>
    </v-row>
  </div>
</template>

<style scoped>
.malePage-landingZone {
  height: 100vh !important;
  width: 100vw;
  background-image: url('../assets/images/male/posing/malePage-home-image.webp');
  background-size: cover;
  background-position: center bottom;
}

.countdown {
  font-size: 2rem;
  color: white;
}

.number {
  font-size: 2.5rem;
  height: 45%;
}

.number-text {
  font-size: 1.5rem;
}

.preco-text {
  background-color: #fd4539;
  border-radius: 288px;
  width: fit-content;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  height: 25px;
}
</style>
