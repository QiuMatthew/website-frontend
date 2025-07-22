// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
    DISCRETE_LOG: '/discrete-log',
};

// API utility functions
export const buildApiUrl = (endpoint) => {
    return `${API_BASE_URL}${endpoint}`;
};