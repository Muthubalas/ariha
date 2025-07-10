import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmZiZGRlM2UzYTk3MmM1MjZlNDcxMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1MjE1MzU4NX0.2ZcnjztAQLSARrKkamVx_-wxzXkJT5fuLgJurDtuZgk';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
   headers: {
    Authorization: `Bearer ${token}`
  }
});


export default api;