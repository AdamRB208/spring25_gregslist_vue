<script setup>
import { House } from '@/models/House.js';


defineProps({
  houseProp: { type: House, required: true }
})

</script>


<template>
  <div class="row shadow-lg mb-4 house-border">
    <div class="col-md-5 px-0">
      <img :src="houseProp.imgUrl" :alt="`A picture of a ${houseProp.year} ${houseProp.description} `">
    </div>
    <div class="col-md-7">
      <div class="p-3">
        <div class="d-flex justify-content-between">
          <p class="fs-3">{{ houseProp.year }} {{ houseProp.bedrooms }} {{ houseProp.bathrooms }} {{ houseProp.levels
          }}</p>
          <small>{{ houseProp.createdAt.toLocaleDateString() }}</small>
        </div>
        <p class="fs-3">{{ '$' + houseProp.price.toLocaleString() }}</p>
        <p v-if="houseProp.description">{{ houseProp.description }}</p>
        <p v-else>A lovely house</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 45dvh;
  width: 100%;
  object-fit: cover;
}

.house-border {
  border-style: solid;
  border-color: rgb(66 184 131);
}
</style>