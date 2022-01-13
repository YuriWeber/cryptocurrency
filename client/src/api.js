import axios from "axios";

// criação do axios com url base para conectar ao backend
export default axios.create({
    baseURL: 'http://localhost:3001',
})