import { API_URL, API_KEY } from '../settings/constants';

class Api {
  constructor({ baseUrl, key }) {
    this._baseUrl = baseUrl;
    this._key = key;
  }

  searchMovie(word) {
    return fetch (`${this._baseUrl}/v1.3/movie?name=${word}&limit=20&token=${this._key}`, {
      method: 'GET',
    })
    .then((res)=> {
      const result = res.json()
      return result
    })
    .catch((error)=> {
      return error
    })
  }
}

const api = new Api({
  baseUrl: API_URL,
  key: API_KEY
})

export default api; 