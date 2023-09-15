import axios from 'axios';
import { SearchResponse } from './models/SearchReponse';
import { ItemDetailResponse } from './models/ItemDetailResponse';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const fetchItemsBySearch = async (searchQuery: string): Promise<SearchResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/items?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    } else {
      console.error('Error al cargar los datos de la API', error);
      throw error;
    }
  }
};

export const fetchItemDetail = async (itemId: string): Promise<ItemDetailResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/items/${itemId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error);
    } else {
      console.error('Error al cargar los datos de la API', error);
      throw error;
    }
  }
};
