import axios from 'axios';
import { getCustomerToken } from './Common';
 // pour boutique
export default axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'authorization': `Bearer ${getCustomerToken()}`,
    }
});
 
 