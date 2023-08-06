import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = `37981342-0f90df91f416340ea3cce758a`;

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const getImages = (searchValue, page) => {
  return axios.get(BASE_URL, {
    params: {
      ...defaultParams,
      q: searchValue,
      per_page: 12 * page,
    },
  });
};