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

    addJobSeeker(jobseeker) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobseekers/addJobseeker`,
                  data: jobseeker,
                  headers: "content-type: application/json",
              });
    }

    deleteJobSeekerById(id) {
        axios.delete(`http://localhost:8080/api/jobseekers/deleteJobSeekerById?jobSeekerId=${id}`);
    }
}