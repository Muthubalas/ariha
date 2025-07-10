import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDdmNGJhNDZmZDkyMWM0ZmU4NzU0MSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0OTgwODQwNn0.WORdB7QyrjOCxl7OAXsqHskNADfuR4MKQpmy6g1gdIY';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
   headers: {
    Authorization: `Bearer ${token}`
  }
});


export default api;