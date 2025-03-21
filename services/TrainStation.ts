import { FormDataType } from "../models/trainStation";
import { api } from "../config/apiConfig";

export class TrainStationService {
  private static readonly ENDPOINT = "/train-stations"; 

  // Method to format form data for submission
  static formatFormData(formData: FormDataType) {
    return {
      transport_type: formData.transportType ? formData.transportType.name: null,
      product_type: formData.productType ? {
        id: formData.productType.id,
        name: formData.productType.name
      } : null,
      company: formData.company ? {
        id: formData.company.id,
        name: formData.company.name
      } : null,
      product: formData.product ? {
        id: formData.product.id,
        name: formData.product.name
      } : null,
      from_country: formData.fromCountry ? {
        id: formData.fromCountry.id,
        name: formData.fromCountry.name
      } : null,
      to_country: formData.toCountry ? {
        id: formData.toCountry.id,
        name: formData.toCountry.name
      } : null,
      wagon_number: formData.wagonNumber,
      weight: formData.weight,
      bar_number: formData.barNumber,
      entry_date_time: formData.entryDateTime,
      exit_date_time: formData.exitDateTime,
    };
  }

  // Method to parse API response back to FormDataType
  static parseResponseToFormData(response: any): FormDataType {
    return {
      transportType: response.transport_type ? {
        id: response.transport_type.id,
        name: response.transport_type.name
      } : null,
      productType: response.product_type ? {
        id: response.product_type.id,
        name: response.product_type.name
      } : null,
      company: response.company ? {
        id: response.company.id,
        name: response.company.name
      } : null,
      product: response.product ? {
        id: response.product.id,
        name: response.product.name
      } : null,
      fromCountry: response.from_country ? {
        id: response.from_country.id,
        name: response.from_country.name
      } : null,
      toCountry: response.to_country ? {
        id: response.to_country.id,
        name: response.to_country.name
      } : null,
      wagonNumber: response.wagon_number,
      weight: response.weight,
      barNumber: response.bar_number,
      entryDateTime: response.entry_date_time,
      exitDateTime: response.exit_date_time,
    };
  }

  // Method to submit form data to backend
  static async submitFormData(formData: FormDataType) {
    try {
      const formattedData = this.formatFormData(formData);
      const response = await api.post(this.ENDPOINT, formattedData);
      return {
        success: true,
        data: this.parseResponseToFormData(response)
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
        data: {
          items: response.data.map((item: any) => this.parseResponseToFormData(item)),
          total: response.total,
          page: response.page,
          limit: response.limit
        }
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
        data: this.parseResponseToFormData(response)
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
        data: this.parseResponseToFormData(response)
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
