import axios from "axios";

export default {
    getAllClient() {
        return axios.get("http://localhost:8000/api/users");
    },
    addClient(req: any) {
        const {data}  = req;
        return axios.post("http://localhost:8000/api/users", data);
    },
    modifypoint(req: any) {
        const {data}  = req;
        return axios.put("http://localhost:8000/api/users/points", data);
    },

}