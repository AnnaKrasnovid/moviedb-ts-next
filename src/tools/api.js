import { API_URL, API_KEY } from '@/settings/constants';
import { MOVIES_LIMIT } from '@/settings/constants';
class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  searchMovie(word) {
    return fetch(`${this._baseUrl}/v1.3/movie?name=${word}&limit=20&token=${this._token}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus)
  }

  getMovieId(id) {
    return fetch(`${this._baseUrl}/v1.3/movie/${id}?token=${this._token}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getActorId(id) {
    return fetch(`${this._baseUrl}/v1/person/${id}?token=${this._token}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getMovies(type, years) {
    return fetch(`${this._baseUrl}/v1.3/movie?type=${type}&year=${years}&rating.kp=8-10&limit=${MOVIES_LIMIT}&sort=year&sort=rating.kp&token=${this._token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*'
        // 'X-API-KEY': this._key,
      }
    })
      .then(this._checkResponseStatus);
  }

  getMoviesByGenre(genre, years = '2000-2023', rating = '7-10') {
    return fetch(`${this._baseUrl}/v1.3/movie?type=movie&genres.name=${genre}&year=${years}&rating.kp=${rating}&limit=${MOVIES_LIMIT}&sort=year&sort=rating.kp&token=${this._token}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  filtersMovies(filters, movieType, limit = 24) {
    return fetch(`${this._baseUrl}/v1.3/movie?${movieType}&${filters.genre}&${filters.years}&${filters.rating}&limit=${limit}&sort=year&sort=rating.kp&page=1&token=${this._token}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getMovieRandom() {
    return fetch(`${this._baseUrl}/v1.3/movie/random?token=${this._token}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return `${res.status} ${res.statusText}`;
  }
}

const api = new Api({
  baseUrl: API_URL,
  token: API_KEY
})

export default api; 