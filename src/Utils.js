import axios from 'axios'

export function queryResources (query) {
  const url = 'http://localhost:4000/'
  axios.get(url)
       .then(response => console.log(response))
}
