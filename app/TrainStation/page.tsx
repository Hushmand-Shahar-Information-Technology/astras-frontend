"use client";
import PageContainer from "../components/PageContainer";
import { 
  Grid, 
  TextField, 
  MenuItem, 
  Button,
  Paper,
  Box,
  ThemeProvider,
  Autocomplete,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import 'dayjs/locale/fa'; // Import Persian locale
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { theme } from "../../theme/theme";
import { FormDataType } from "../../models/trainStation";
import {
  transportTypes,
  productTypes,
  companies,
  products,
  countries,
} from "../../constants/trainStationData";
import { TrainStationService } from "../../services/TrainStation";

export default function TrainStation() {
  const [formData, setFormData] = useState<FormDataType>({
    transportType: null,
    productType: null,
    company: null,
    product: null,
    fromCountry: null,
    toCountry: null,
    wagonNumber: '',
    weight: '',
    barNumber: '',
    entryDateTime: null,
    exitDateTime: null,
  });

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validate form data
    const { isValid, errors } = TrainStationService.validateFormData(formData);
    
    if (!isValid) {
      // Handle validation errors
      console.log('Validation errors:', errors);
      return;
    }

    // Submit form data
    const result = await TrainStationService.submitFormData(formData);
    
    if (result.success) {
      // Handle successful submission
      console.log('Form submitted successfully');
      // You could add a success message or redirect here
    } else {
      // Handle submission error
      console.error('Form submission failed:', result.error);
      // You could show an error message to the user here
    }
  };

  return (
    <PageContainer pageTitle="فورم ثبت اطلاعات">
      <ThemeProvider theme={theme}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'rgb(249 250 251)' }}>
          <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit}
            sx={{ 
              mt: 1,
              '& .MuiFormControl-root': {
                textAlign: 'right',
                direction: 'rtl',
              },
              '& .MuiInputBase-root': {
                textAlign: 'right',
                direction: 'rtl',
              },
              '& .MuiMenuItem-root': {
                textAlign: 'right',
                direction: 'rtl',
              },
              '& .MuiGrid-container': {
                mb: 2,
              },
            }}
          >
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {/* Transport Type */}
              <Grid item xs={12} md={8}>
                <Autocomplete
                  fullWidth
                  options={transportTypes}
                  value={formData.transportType}
                  onChange={(_, newValue) => setFormData({...formData, transportType: newValue})}
                  getOptionLabel={(option) => option?.name || ''}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="نوع فورم"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Product Type */}
              <Grid item xs={12} md={4}>
                <Autocomplete
                  fullWidth
                  options={productTypes}
                  value={formData.productType}
                  onChange={(_, newValue) => setFormData({...formData, productType: newValue})}
                  getOptionLabel={(option) => option?.name || ''}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="نوع محصول"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {/* Company */}
              <Grid item xs={12} md={4}>
                <Autocomplete
                  fullWidth
                  options={companies}
                  value={formData.company}
                  onChange={(_, newValue) => setFormData({...formData, company: newValue})}
                  getOptionLabel={(option) => option?.name || ''}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="شرکت"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Product */}
              <Grid item xs={12} md={4}>
                <Autocomplete
                  fullWidth
                  options={products}
                  value={formData.product}
                  onChange={(_, newValue) => setFormData({...formData, product: newValue})}
                  getOptionLabel={(option) => option?.name || ''}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="اسم جنس"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>

              {/* From Country */}
              <Grid item xs={12} md={4}>
                <Autocomplete
                  fullWidth
                  options={countries}
                  value={formData.fromCountry}
                  onChange={(_, newValue) => setFormData({...formData, fromCountry: newValue})}
                  getOptionLabel={(option) => option?.name || ''}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="کشور مبدا"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {/* To Country */}
              <Grid item xs={12} md={4}>
                <Autocomplete
                  fullWidth
                  options={countries}
                  value={formData.toCountry}
                  onChange={(_, newValue) => setFormData({...formData, toCountry: newValue})}
                  getOptionLabel={(option) => option?.name || ''}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="کشور مقصد"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Number of Wagons */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="نمبر واگن"
                  type="number"
                  value={formData.wagonNumber}
                  onChange={(e) => setFormData({...formData, wagonNumber: e.target.value})}
                  InputProps={{ 
                    inputProps: { min: 1 },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* Weight */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="وزن (تن)"
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {/* Number of Bars */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="  نمبر بارنامه" 
                  type="number"
                  value={formData.barNumber}
                  onChange={(e) => setFormData({...formData, barNumber: e.target.value})}
                  InputProps={{ 
                    inputProps: { min: 1 },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* Date/Time Pickers */}
              <Grid item xs={12} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa">
                  <DateTimePicker
                    label="تاریخ و ساعت ورود"
                    value={formData.entryDateTime}
                    onChange={(newValue) => setFormData({...formData, entryDateTime: newValue})}
                    format="YYYY/MM/DD HH:mm"
                    ampm={false}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputLabelProps: {
                          shrink: true,
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa">
                  <DateTimePicker
                    label="تاریخ و ساعت خروج"
                    value={formData.exitDateTime}
                    onChange={(newValue) => setFormData({...formData, exitDateTime: newValue})}
                    format="YYYY/MM/DD HH:mm"
                    ampm={false}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputLabelProps: {
                          shrink: true,
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{  }}>
              <Grid item xs={12} sx={{ textAlign: 'left' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'rgb(59 130 246)',
                    '&:hover': { bgcolor: 'rgb(29 78 216)' },
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                >
                  ثبت اطلاعات
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </ThemeProvider>
    </PageContainer>
  );
}
