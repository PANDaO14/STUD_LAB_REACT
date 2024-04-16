import axios from 'axios';
import Aphorism from './IAphorism';

const BASE_URL = 'https://api.quotable.io';

const fetchAphorisms = async () => {
    const response = await axios.get(`${BASE_URL}/quotes?tags=love`);
    return response.data.results as Aphorism[];
};

export default fetchAphorisms;