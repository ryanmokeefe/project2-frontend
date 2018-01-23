import axios from 'axios'

export function queryResources (query) {
  
  const url = 'http://localhost:4000/resources'
  return axios.get(url)
   

}
