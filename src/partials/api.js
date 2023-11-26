// api.js
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'api_key=40912398-8d299132deed18abf6d973d7b';

export async function searchImages(query, page = 1) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '40912398-8d299132deed18abf6d973d7b',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 20,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
