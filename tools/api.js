import { API_URL, API_KEY } from '../settings/constants';
import { getCurrentYear } from './utils';

class Api {
  constructor({ baseUrl, key }) {
    this._baseUrl = baseUrl;
    this._key = key;
  }

  searchMovie(word) {
    return fetch(`${this._baseUrl}/v1.3/movie?name=${word}&limit=20&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus)
  }

  getMovieId(id) {
    return fetch(`${this._baseUrl}/v1.3/movie?search=${id}&field=id&selectFields=id name alternativeName year description shortDescription rating.kp videos.trailers.url persons.photo persons.profession persons.name movieLength poster.url countries.name genres.name persons.id rating.imdb&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getActorId(id) {
    return fetch(`${this._baseUrl}/v1/person/${id}?token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getMovies(type, years) {
    return fetch(`${this._baseUrl}/v1.3/movie?type=${type}&year=${years}&rating.kp=8-10&limit=24&sort=year&sort=rating.kp&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getCartoons(years) {
    return fetch(`${this._baseUrl}/v1.3/movie?type=cartoon&year=${years}&rating.kp=8.3-10&limit=24&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }
  getSeries(years) {
    return fetch(`${this._baseUrl}/v1.3/movie?type=tv-series&year=${years}&rating.kp=8.3-10&limit=24&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  getMoviesByGenre(genre, years = '2000-2023', rating = '7-10') {
    return fetch(`${this._baseUrl}/v1.3/movie?type=movie&genres.name=${genre}&year=${years}&rating.kp=${rating}&limit=24&sort=year&sort=rating.kp&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  filtersMovies(genre = '', years = 'year=2000-2023', rating = 'rating.kp=7-10', movieType = 'type=movie', page = 1) {
    return fetch(`${this._baseUrl}/v1.3/movie?${movieType}&${genre}&${years}&${rating}&limit=24&sort=year&sort=rating.kp&page=${page}&token=${this._key}`, {
      method: 'GET',
    })
      .then(this._checkResponseStatus);
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

const api = new Api({
  baseUrl: API_URL,
  key: API_KEY
})

export default api; 