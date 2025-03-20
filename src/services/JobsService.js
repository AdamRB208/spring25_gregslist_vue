import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Job } from "@/models/Jobs.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    logger.log('Got Jobs!', response.data)
    const jobs = response.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
  }

  async createJob(jobData) {
    const response = await api.post('api/jobs', jobData)
    logger.log('created Job', response.data)
    const job = new Job(response.data)
    AppState.jobs.push(job)
  }

  async deleteJob(jobId) {
    const response = await api.delete(`api/jobs/${jobId}`)
    logger.log('deleted job!', response.data)
  }

}

export const jobsService = new JobsService()