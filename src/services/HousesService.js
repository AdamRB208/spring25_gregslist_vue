import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { House } from "@/models/House.js";
import { AppState } from "@/AppState.js";

class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('Got Houses', response.data)
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    logger.log('created house', response.data)
    const house = new House(response.data)
    AppState.houses.push(house)
  }

}

export const houseService = new HousesService()