import axios from "axios";

export default class SchoolsService {
    getSchools() {
        return axios.get(`http://localhost:8080/api/departments/getDepartments`);
    }
}
