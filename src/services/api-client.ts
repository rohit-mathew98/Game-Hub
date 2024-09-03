import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b168306b0f14403ebe2c9cc974eaaffe"
    }
})