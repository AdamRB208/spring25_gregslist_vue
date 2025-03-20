import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Job } from "@/models/Jobs.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/cars')
    logger.log('Got Jobs!', response.data)
    const jobs = response.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
  }
}

export const jobsService = new JobsService()