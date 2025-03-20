<script setup>
import { Job } from '@/models/Jobs.js';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';

defineProps({
  jobProp: { type: Job, required: true }
})

async function deleteJob(jobId) {
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this car?', 'It will be gone forever!', 'Yes I am sure', "I've changed my mind")
    if (!confirmed) {
      return
    }
    await jobsService.deleteJob(jobId)
  } catch (error) {
    Pop.error(error, 'Could not delete job')
    logger.error('COULD NOT DELETE JOB', error)
  }
}

</script>


<template>
  <div class="col-12">
    <div class="row shadow job-border" style="border-color: rgb(66 184 131);">
      <div class="col-12">
        <div class="d-flex flex-column justify-content-between h-100">
          <div>
            <p class="fs-3 mb-1">Company: {{ jobProp.company }}</p>
            <div class="pt-3">
              <p>Job Title: {{ jobProp.jobTitle }}</p>
              <p>Hours: {{ jobProp.hours }}</p>
              <p> Rate: ${{ jobProp.rate }}</p>
            </div>
            <div class="d-flex mt-1 justify-content-between align-items-center">
              <p class="fs-5"> Description: {{ jobProp.description }}</p>
            </div>
          </div>
          <div class="text-end mb-1">
            <button @click="deleteJob(jobProp.id)" class="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.job-border {
  border-style: solid;
  border-color: rgb(66 184 131);
}
</style>