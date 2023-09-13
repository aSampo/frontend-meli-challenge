import axios from 'axios';
import { ApiSearchResponse } from './models/SearchReponse';

//TODO move to .env
const BASE_URL = 'http://localhost:3000';

export const fetchItemsBySearch = async (searchQuery: string): Promise<ApiSearchResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/items?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error('Error al cargar los datos de la API', error);
    throw error;
  }
};
