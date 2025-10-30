import { C } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

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
    // UPDATE: `${API_BASE_URL}/company`,
    // DELETE: `${API_BASE_URL}/company`,
  },
  CONTACT: {
    LIST: `${API_BASE_URL}/contacts`,
  },
  DASHBOARD: `${API_BASE_URL}/dashboard`,
};
