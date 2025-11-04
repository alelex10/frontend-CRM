const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const API = {
  BASE_URL: API_BASE_URL,
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    // LOGOUT: `${API_BASE_URL}/auth/logout`,
  },
  COMPANI: {
    LIST: `${API_BASE_URL}/company`,
    CREATE: `${API_BASE_URL}/company/create`,
    UPDATE: `${API_BASE_URL}/company`,
    GET_ID: `${API_BASE_URL}/company`,
    GET_CONTACTS: `${API_BASE_URL}/company/contacts`,
  },
  CONTACT: {
    LIST: `${API_BASE_URL}/contacts`,
    UPDATE_MANY_CONTACTS: `${API_BASE_URL}/contacts/many`,
    WITHOUT_COMPANY: `${API_BASE_URL}/contacts/company-null`,
  },
  DASHBOARD: `${API_BASE_URL}/dashboard`,
  DEAL: {
    LIST: `${API_BASE_URL}/deals`,
    CREATE: `${API_BASE_URL}/deals`,
    UPDATE: `${API_BASE_URL}/deals`,
    DELETE: `${API_BASE_URL}/deals`,
    
  },
};
