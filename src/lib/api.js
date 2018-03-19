import axios from 'axios';

export function getAPOD(date = ''){
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=YBWoz4VqdhlsFQYpeUEkrcZjNqS8qqHBEFhu6GlC&date=${date}`);
}
