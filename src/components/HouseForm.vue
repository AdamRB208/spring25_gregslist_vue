<script setup>
import { houseService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableHouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  year: 1820,
  imgUrl: '',
  price: 0,
  description: ''
})

async function createHouse() {
  try {
    const houseData = editableHouseData.value
    await houseService.createHouse(houseData)
  } catch (error) {
    Pop.error(error, 'Could not create house')
    logger.error('COULD NOT CREATE HOUSE', error)
  }
}
</script>


<template>
  <form @submit.prevent="createHouse()">
    <div class="mb-3">
      <label for="bedrooms">Bedrooms: 0</label>
      <input v-model="editableHouseData.bedrooms" id="bedrooms" name="bedrooms" type="number" required min="1" max="10"
        placeholder="0">
    </div>
    <div class="mb-3">
      <label for="bathrooms">Bathrooms: 0</label>
      <input v-model="editableHouseData.bathrooms" id="bathrooms" name="bathrooms" type="number" required min="1"
        max="10" placeholder="0">
    </div>
    <div class="mb-3">
      <label for="levels">Levels: 0</label>
      <input v-model="editableHouseData.levels" id="levels" name="levels" type="number" required min="1" max="10"
        placeholder="0">
    </div>
    <div class="mb-3">
      <label for="year">Year</label>
      <input v-model="editableHouseData.year" id="year" name="year" type="number" required min="1776" max="2025"
        placeholder="2025">
    </div>
    <div class="mb-3">
      <label for="houseImgUrl">House Image URL</label>
      <input v-model="editableHouseData.imgUrl" id="houseImgUrl" name="houseImgUrl" type="url" required maxlength="500"
        placeholder="Image URL...">
    </div>
    <div class="mb-3">
      <label for="price">Price</label>
      <input v-model="editableHouseData.price" id="price" name="price" type="number" required min="0" max="100000000"
        placeholder="$$$">
    </div>
    <div class="mb-3">
      <label for="houseDescription">House Description</label>
      <textarea v-model="editableHouseData.description" name="houseDescription" id="houseDescription" type="text"
        class="w-100" placeholder="Description of the house..." maxlength="500"></textarea>
    </div>
    <!-- <div class="mb-3">
      <label for="creatorId">creatorId</label>
      <input id="creatorId" name="creatorId" type="">
    </div>
    <div class="mb-3">
      <label for="id">id</label>
      <input id="id" name="id" type="">
    </div> -->
    <div class="text-end">
      <!-- <button class="btn btn-outline-danger me-2" type="reset">
        Reset Form
      </button> -->
      <button class="btn btn-outline-success" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
label {
  display: block;
}

input {
  width: 100%;
}
</style>