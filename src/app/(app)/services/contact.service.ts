import { apiService } from './api.service';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const contactService = {
  submitForm: (data: ContactFormData) => {
    return apiService.post<{ success: boolean }>('/contact', data);
  }
}; 