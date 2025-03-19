<script setup>
import { houseService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';



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
  <section class="container">

  </section>
</template>


<style lang="scss" scoped></style>