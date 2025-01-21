import axios from 'axios';

export const API_BASE_URL = 'https://donnai.azurewebsites.net';

// Create a function to get token that works on both client and server
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('jwt_token');
  }
  return null;
};

// Update axios config to be dynamic
const getAxiosConfig = () => ({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${getToken()}`
  },
});

// Create api instance only on client side
export const api = typeof window !== 'undefined' 
  ? axios.create({
      baseURL: API_BASE_URL,
      headers: getAxiosConfig().headers
    })
  : null;

// Initialize interceptors only on client side
if (api) {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('jwt_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        
        try {
          const refreshToken = localStorage.getItem('refresh_token');
          const response = await axios.post(`${API_BASE_URL}/api/refresh-token`, {
            refreshToken
          });
          
          const { token } = response.data;
          localStorage.setItem('jwt_token', token);
          
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        } catch (error) {
          localStorage.removeItem('jwt_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
          return Promise.reject(error);
        }
      }
      
      return Promise.reject(error);
    }
  );
}

export async function testApiConnection() {
  if (!api) {
    console.error('API instance not available');
    return null;
  }

  try {
    console.log('Testing API connection...');
    const response = await api.get('/api/health');
    console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API Error:', {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data
      });
    } else {
      console.error('Unexpected Error:', error);
    }
    return null;
  }
} 