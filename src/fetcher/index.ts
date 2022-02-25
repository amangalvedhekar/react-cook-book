import axios from "axios";
import {CategoriesList} from './types';

export const coinGeckoAxios = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins/'
});

export const getCategories = async (): Promise<CategoriesList[]> => {
  try {
    const {data} = await coinGeckoAxios.get('/categories/list');
    return data;
  } catch (e) {
    throw e;
  }
}
