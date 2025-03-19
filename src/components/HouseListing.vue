<script setup>
import { House } from '@/models/House.js';


defineProps({
  houseProp: { type: House, required: true }
})

</script>


<template>
  house listing
  <div>
    <p>{{ houseProp.id }}</p>
  </div>
</template>


<style lang="scss" scoped></style>