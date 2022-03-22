import {coinGeckoAxios} from 'src/fetcher/index';

export const getFetcher = (url: string) => coinGeckoAxios.get(url).then(res => res.data);
