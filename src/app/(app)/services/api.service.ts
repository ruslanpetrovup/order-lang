import { SERVER_URL, getAuthHeader } from '../config/api.config'

class ApiService {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(getAuthHeader() as Record<string, string>),
      }

      const response = await fetch(`${this.baseUrl}${endpoint}`, { headers })
      return response.json()
    } catch (error) {
      throw new Error('Failed to fetch data from server')
    }
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(getAuthHeader() as Record<string, string>),
        },
        body: JSON.stringify(data),
      })
      return response.json()
    } catch (error) {
      throw new Error('Failed to send data to server')
    }
  }
}

export const apiService = new ApiService(SERVER_URL)
