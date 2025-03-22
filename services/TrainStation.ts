import { FormDataType } from "../models/trainStation";
import { api } from "../config/apiConfig";

export class TrainStationService {
  private static readonly ENDPOINT = "/train-station"; 

  // Method to format form data for submission
  static formatFormData(formData: FormDataType) {
    return {
      transportType: formData.transportType?.name || '',
      productType: formData.productType?.name || '',
      company: formData.company?.name || '',
      product: formData.product?.name || '',
      fromCountry: formData.fromCountry?.name || '',
      toCountry: formData.toCountry?.name || '',
      wagonNumber: formData.wagonNumber,
      weight: formData.weight,
      barNumber: formData.barNumber,
      entryDateTime: formData.entryDateTime,
      exitDateTime: formData.exitDateTime,
    };
  }

  // Method to submit form data to backend
  static async submitFormData(formData: FormDataType) {
    try {
      const formattedData = this.formatFormData(formData);
      const response = await api.post(this.ENDPOINT, formattedData);
      return {
        success: true,
        data: response
      };
    } catch (error) {
      console.error('Error submitting form:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit form'
      };
    }
  }

  // Method to get all train station records
  static async getAllRecords(params?: { page?: number; limit?: number }) {
    try {
      const response = await api.get(this.ENDPOINT, params);
      return {
        success: true,
        data: response
      };
    } catch (error) {
      console.error('Error fetching records:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch records'
      };
    }
  }

  // Method to get a single record
  static async getRecord(id: string) {
    try {
      const response = await api.get(`${this.ENDPOINT}/${id}`);
      return {
        success: true,
        data: response
      };
    } catch (error) {
      console.error('Error fetching record:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch record'
      };
    }
  }

  // Method to update a record
  static async updateRecord(id: string, formData: FormDataType) {
    try {
      const formattedData = this.formatFormData(formData);
      const response = await api.put(`${this.ENDPOINT}/${id}`, formattedData);
      return {
        success: true,
        data: response
      };
    } catch (error) {
      console.error('Error updating record:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update record'
      };
    }
  }

  // Method to delete a record
  static async deleteRecord(id: string) {
    try {
      const response = await api.delete(`${this.ENDPOINT}/${id}`);
      return {
        success: true,
        data: response
      };
    } catch (error) {
      console.error('Error deleting record:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete record'
      };
    }
  }

  // Method to validate form data (you can expand this)
  static validateFormData(formData: FormDataType) {
    const errors: Partial<Record<keyof FormDataType, string>> = {};

    if (!formData.transportType) {
      errors.transportType = 'نوع فورم الزامی است';
    }
    if (!formData.productType) {
      errors.productType = 'نوع محصول الزامی است';
    }
    if (!formData.company) {
      errors.company = 'شرکت الزامی است';
    }
    if (!formData.product) {
      errors.product = 'محصول الزامی است';
    }
    if (!formData.fromCountry) {
      errors.fromCountry = 'کشور مبدا الزامی است';
    }
    if (!formData.toCountry) {
      errors.toCountry = 'کشور مقصد الزامی است';
    }
    if (!formData.wagonNumber) {
      errors.wagonNumber = 'نمبر واگن الزامی است';
    }
    if (!formData.weight) {
      errors.weight = 'وزن الزامی است';
    }
    if (!formData.barNumber) {
      errors.barNumber = 'نمبر بارنامه الزامی است';
    }
    if (!formData.entryDateTime) {
      errors.entryDateTime = 'تاریخ و ساعت ورود الزامی است';
    }
    if (!formData.exitDateTime) {
      errors.exitDateTime = 'تاریخ و ساعت خروج الزامی است';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}
