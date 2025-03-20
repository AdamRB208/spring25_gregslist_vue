<script setup>
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';


onMounted(() => {
  getJobs()
})

async function getJobs() {
  try {
    await jobsService.getJobs()
  } catch (error) {
    Pop.error(error, 'Could not get Jobs')
    logger.error('COULD NOT GET JOBS', error)
  }
}
</script>


<template>
  Jobs Page!
</template>


<style lang="scss" scoped></style>