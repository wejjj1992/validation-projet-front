import axios from 'axios';
import { getToken } from './Common';
 // pour adminstration
export default axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'authorization': `Bearer ${getToken()}`,
    }
});
 
 