import axios from 'axios'

export default class JobSeekersService {
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getJobseekers")
    }

    getByIdDetail(id){
        return axios.get("http://localhost:8080/api/cvs/getCvWithJobSeekerId?jobseekerId="+id)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobseekers/getJobSeekerById?jobSeekerId="+id)
    }
}