<script setup>
import { AppState } from '@/AppState.js';
import CarForm from '@/components/CarForm.vue';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/HouseListing.vue';
import { houseService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)

const account = computed(() => AppState.account)

onMounted(() => {
  getHouses()
})

async function getHouses() {
  try {
    await houseService.getHouses()
  } catch (error) {
    Pop.error(error, 'Could not get houses')
    logger.error('COULD NOT GET HOUSES', error)
  }
}

</script>


<template>
  <!-- <section class="container">
    <div class="row">
      <div class="col-12">
        {{ houses }}
      </div>
    </div>
  </section> -->
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-3">Houses</h1>
        </div>
      </div>
    </div>
  </section>
  <section v-if="account" class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <HouseForm />
      </div>
      <div class="col-md-6">
        <div class="text-center my-3">
          <img
            src="https://images.unsplash.com/photo-1522851276084-c6f32bde1f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHBlb3BsZSUyMGluJTIwYSUyMGhvdXNlfGVufDB8MXwwfHx8Mg%3D%3D"
            alt="Happy couple walking up to newly purchased house" class="img-fluid rounded-5 shadow-lg">
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <h2 class="text-center">Please log in to list a house!</h2>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-12">
        <HouseListing :houseProp="house" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
img {
  max-height: 80dvh;
  width: 100%;
  object-fit: cover;
}
</style>