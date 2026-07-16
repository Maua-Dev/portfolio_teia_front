const API_BASE_URL = 'http://localhost:8000/api'; // Switch to the .env file once you have the official backend link. 

/**
 * Generic helper function to handle API HTTP requests in a standardized way.
 */
async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    
    if (!response.ok) {
      throw new Error(`API Error (${response.status}): ${response.statusText}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error(`Connection failure with service endpoint [${endpoint}]:`, error);
    throw error;
  }
}

/**
 * System-specific API services
 */
export const cardsService = {
  /**
   * Fetches the raw list of cards from the backend.
   * @param tipo Optional: filter directly on the API by 'picture' or 'member'
   */
  async listar(tipo?: 'picture' | 'member') {
    const queryParam = tipo ? `?tipo=${tipo}` : '';
    return apiRequest<any[]>(`/cards${queryParam}`);
  }
};