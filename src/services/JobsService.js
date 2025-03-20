import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/cars')
    logger.log('Got Jobs!', response.data)
  }
}

export const jobsService = new JobsService()