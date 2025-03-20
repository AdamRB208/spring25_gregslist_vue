<script setup>
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableJobData = ref({
  company: '',
  jobTitle: '',
  hours: 0,
  rate: 0,
  description: '',
  creatorId: '',
  id: '',
})

async function createJob() {
  try {
    const jobData = editableJobData.value
    await jobsService.createJob(jobData)
  } catch (error) {
    Pop.error(error, 'Could not create job')
    logger.error('COULD NOT CREATE JOB', error)
  }
}
</script>


<template>
  <section class="contioner">
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="createJob()">
          <div class="mb-3">
            <label for="company">Company</label>
            <input v-model="editableJobData.company" id="company" name="company" type="text" required min="1" max="30"
              placeholder="Company Name Here...">
          </div>
          <div class="mb-3">
            <label for="jobTitle">Job Title</label>
            <input v-model="editableJobData.jobTitle" id="jobTitle" name="jobTitle" type="text" required min="1"
              max="30" placeholder="Job Title Here...">
          </div>
          <div class="mb-3">
            <label for="hours">Hours</label>
            <input v-model="editableJobData.hours" id="hours" name="hours" type="number" required min="1" max="24"
              placeholder="0">
          </div>
          <div class="mb-3">
            <label for="rate">Rate</label>
            <input v-model="editableJobData.rate" id="rate" name="rate" type="number" required min="1" max="1000000"
              placeholder="$0.00">
          </div>
          <div class="mb-3">
            <label for="jobDescription">Job Description</label>
            <textarea v-model="editableJobData.description" name="jobDescription" id="jobDescription" type="text"
              class="w-100" placeholder="Description of the job..." maxlength="500"></textarea>
          </div>
          <!-- <div class="mb-3">
    <label for="creatorId">creatorId</label>
    <input id="creatorId" name="creatorId" type="">
  </div>
  <div class="mb-3">
    <label for="id">id</label>
    <input id="id" name="id" type="" >
  </div> -->
          <div class="text-end">
            <button class="btn btn-outline-success" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
label {
  display: block;
}

input {
  width: 100%;
}
</style>