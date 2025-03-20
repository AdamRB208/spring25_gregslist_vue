<script setup>
import { Job } from '@/models/Jobs.js';

defineProps({
  jobProp: { type: Job, required: true }
})

</script>


<template>
  Job Listing!
  <div>
    <p>{{ jobProp.jobTitle }}</p>
  </div>
</template>


<style lang="scss" scoped></style>