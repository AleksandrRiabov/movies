import { API_URL, API_KEY_3 } from './api/api';

export const getMovies = async ({ url }) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error('Something whent wrong, status code not 200');
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getMovieDetails = async (movieId, extra) => {
  const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY_3}&append_to_response=${extra}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error('Something whent wrong, status code not 200');
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPersonDetails = async ({ id }) => {
  const extra = [`movie_credits`, `external_ids`];
  const url = `${API_URL}/person/${id}?api_key=${API_KEY_3}&append_to_response=${extra}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error('Something whent wrong, status code not 200');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
