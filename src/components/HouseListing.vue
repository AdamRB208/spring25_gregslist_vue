<script setup>
import { AppState } from '@/AppState.js';
import { Account } from '@/models/Account.js';
import { House } from '@/models/House.js';
import { houseService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

async function deleteHouse(houseId) {
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'It will be gone forever!', 'Yes I am sure', 'Ive changed my mind')
    if (!confirmed) {
      return
    }
    await houseService.deleteHouse(houseId)
  } catch (error) {
    Pop.error(error, 'Could not delete house')
    logger.error('COULD NOT DELETE HOUSE', error)
  }
}

</script>


<template>
  <div class="row shadow-lg mb-4 house-border">
    <div class="col-md-5 px-0">
      <img :src="houseProp.imgUrl" :alt="`A picture of a ${houseProp.year} ${houseProp.description} `">
    </div>
    <div class="col-md-7">
      <div class="p-3">
        <div class="d-flex justify-content-between">
          <p class="fs-2">Year: {{ houseProp.year }} Bedrooms: {{ houseProp.bedrooms }} Bathrooms: {{
            houseProp.bathrooms }} Levels: {{
              houseProp.levels
            }}</p>
          <small>{{ houseProp.createdAt.toLocaleDateString() }}</small>
        </div>
        <p class="fs-3">Price: {{ '$' + houseProp.price.toLocaleString() }}</p>
        <p Description: v-if="houseProp.description">{{ houseProp.description }}</p>
        <p v-else>A lovely house</p>
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <button v-if="houseProp.creatorId == account?.id" @click="deleteHouse(houseProp.id)"
                class="btn btn-outline-danger" type="button">
                Delete House
              </button>
            </div>
          </div>
          <div class="d-flex align-items-center gap-3">
            <p class="mb-0">{{ houseProp.creatorId.name }}</p>
            <img :src="houseProp.creatorId.picture" alt="" class="creator-img">
          </div>
        </div>
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

.creator-img {
  height: 3.7em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>