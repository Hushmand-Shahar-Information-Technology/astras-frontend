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
  createTheme,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import 'dayjs/locale/fa'; // Import Persian locale

// Create RTL theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'inherit',
    fontSize: 16,
    
    
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            right: 27,
            top: -8,
            fontSize: 20,
            fontWeight: 'bold',
            left: 'auto',
            transformOrigin: 'right',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              textAlign: 'right',
               borderColor: '#1976d2',
               height: 52,
            },
          },
        },
      },
    },
  },
});

// Static data for dropdowns
const transportTypes = [
  { id: 1, name: "ریل" },
  { id: 2, name: "کانتینر" },
  { id: 3, name: "واگن" },
];

const productTypes = [
  { id: 1, name: "مواد نفتی" },
  { id: 2, name: "خشکه باب" },
];

const companies = [
  { id: 1, name: "شرکت راه آهن افغانستان" },
  { id: 2, name: "شرکت ترانسپورت کابل" },
  { id: 3, name: "شرکت لوژستیکی خیبر" },
  { id: 4, name: "شرکت حمل و نقل هرات" },
  { id: 5, name: "شرکت ترانسپورت بلخ" },
  { id: 6, name: "شرکت باربری قندهار" },
  { id: 7, name: "شرکت لوژستیک پامیر" },
  { id: 8, name: "شرکت حمل و نقل میوند" },
  { id: 9, name: "شرکت ترانسپورت سپین غر" },
  { id: 10, name: "شرکت باربری هندوکش" },
  { id: 11, name: "شرکت لوژستیک بامیان" },
  { id: 12, name: "شرکت حمل و نقل مزار" },
  { id: 13, name: "شرکت ترانسپورت جلال آباد" },
];

const products = [
  { id: 1, name: "تیل دیزل" },
  { id: 2, name: "تیل پطرول" },
  { id: 3, name: "گاز مایع" },
  { id: 4, name: "آهن" },
];

const countries = [
  { id: 1, name: "افغانستان" },
  { id: 2, name: "ازبکستان" },
  { id: 3, name: "ترکمنستان" },
  { id: 4, name: "تاجیکستان" },
  { id: 5, name: "ایران" },
];

export default function TrainStation() {
  return (
    <PageContainer pageTitle="فورم ثبت اطلاعات">
      <ThemeProvider theme={theme}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box 
            component="form" 
            noValidate 
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
            }}
          >
            <Grid container spacing={3}>
              {/* Transport Type */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="نوع ترانسپورت"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {transportTypes.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Product Type */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="نوع محصول"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {productTypes.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Company */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="شرکت"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {companies.map((company) => (
                    <MenuItem key={company.id} value={company.id}>
                      {company.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Product */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="اسم جنس"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {products.map((product) => (
                    <MenuItem key={product.id} value={product.id}>
                      {product.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* From Country */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="کشور مبدا"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* To Country */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="کشور مقصد"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Number of Wagons */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="نمبر واگن"
                  type="number"
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* Number of Bars */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="  نمبر بارنامه" 
                  type="number"
                  InputProps={{ 
                    inputProps: { min: 1 },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* Date Pickers */}
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa">
                  <DatePicker
                    label="تاریخ ورود "
                    format="YYYY/MM/DD"
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

              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa">
                  <DatePicker
                    label="تاریخ خروج "
                    format="YYYY/MM/DD"
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

              {/* Submit Button */}
              <Grid item xs={12} sx={{ textAlign: 'left' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 1,
                    bgcolor: 'rgb(59 130 246)',
                    '&:hover': { bgcolor: 'rgb(29 78 216)' },
                    px: 5,
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
