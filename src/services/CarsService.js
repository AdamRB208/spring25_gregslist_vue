import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Car } from "@/models/Car.js"
import { AppState } from "@/AppState.js"

class CarsService {

  async getCars() {
    const response = await api.get('api/cars')
    logger.log('GOT CARS 🚓🚓🚗🚘🚘🚘', response.data)
    const cars = response.data.map(pojo => new Car(pojo))
    AppState.cars = cars
  }

  async createCar(carData) {
    const response = await api.post('api/cars', carData)
    logger.log('CREATED CAR', response.data)
    const car = new Car(response.data)
    AppState.cars.push(car)
  }
}

export const carsService = new CarsService()