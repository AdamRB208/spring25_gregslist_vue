<script setup>
import { AppState } from '@/AppState.js';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import JobListing from '@/components/JobListing.vue';
import JobForm from '@/components/JobForm.vue';

const jobs = computed(() => AppState.jobs)

const account = computed(() => AppState.account)

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
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-3">Jobs</h1>
        </div>
      </div>
    </div>
  </section>
  <section v-if="account" class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <JobForm />
      </div>
      <div class="col-md-6">
        <div class="text-center my-3">
          <img
            src="https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZ3xlbnwwfDF8MHx8fDI%3D"
            alt="image of hands working" class="img-fluid rounded-5 shadow-lg">
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <h2 class="text-center">Please log in to list a job!</h2>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="job in jobs" :key="job.id" class="col-12">
        <JobListing :jobProp="job" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>