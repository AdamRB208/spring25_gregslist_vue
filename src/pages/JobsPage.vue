<script setup>
import { AppState } from '@/AppState.js';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const jobs = computed(() => AppState.jobs)

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
  {{ jobs }}
</template>


<style lang="scss" scoped></style>