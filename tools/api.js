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
    .then(this._checkResponseStatus)    
  }

  getMovieId(id) {
    return fetch (`${this._baseUrl}/v1.3/movie?search=${id}&field=id&selectFields=id name alternativeName year description shortDescription rating.kp videos.trailers.url persons.photo persons.profession persons.name movieLength poster.url countries.name genres.name persons.id rating.imdb&token=${this._key}`, {     
      method: 'GET',
    })
    .then(this._checkResponseStatus);  
  }

  getMovies(years) {
    return fetch (`${this._baseUrl}/v1.3/movie?sort=year&sort=rating.kp&year=${years}&sortType=1&limit=20&token=${this._key}`, {
      method: 'GET',
    })
    .then(this._checkResponseStatus);  
  }

  getCartoons(years) {
    return fetch (`${this._baseUrl}/v1.3/movie?type=cartoon&year=${years}&rating.kp=8.3-10&limit=20&token=${this._key}`, {     
      method: 'GET',
    })
    .then(this._checkResponseStatus);  
  }
  getSeries(years) {
    return fetch (`${this._baseUrl}/v1.3/movie?type=tv-series&year=${years}&rating.kp=8.3-10&limit=20&token=${this._key}`, {     
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