"use client";
import { useState } from "react";
import PageContainer from "../../components/PageContainer";
import { 
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  ThemeProvider, 
  createTheme,
  Typography,
  Box,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Theme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import 'dayjs/locale/fa';

// Create RTL theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'inherit',
    fontSize: 18,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            right: 30,
            fontSize: 18,
            
            fontWeight: 'bold',
            left: 'auto',
            transformOrigin: 'right',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              textAlign: 'right',
              borderColor: '#1976d2',
            },
          },
        },
      },
    },
  },
}, faIR);

declare module '@mui/material/styles' {
  interface Theme {
    direction: 'rtl' | 'ltr';
  }
  interface ThemeOptions {
    direction?: 'rtl' | 'ltr';
  }
}

export default function TrainStationList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);
  const [searchText, setSearchText] = useState('');

  return (
    <PageContainer pageTitle="لیست  فرم ها خ">
      <ThemeProvider theme={theme}>
      

        {/* Search Sections */}
        <Grid container spacing={3} sx={{ mb: 2 }}>
          {/* Text Search Section */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
             
              <TextField
                fullWidth
                placeholder="جستجو..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    height: '40px'
                  }
                }}
              />
            </Paper>
          </Grid>
          {/* Date Range Search Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2,  }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa">
                    <DatePicker
                      label="از تاریخ"
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
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
                      label="تا تاریخ"
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
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
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Data Table */}
        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 2 }}>
          <Box sx={{ p: 3, borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'right',
                color: '#1976d2',
                fontWeight: 'bold'
              }}
            >
              جدول معلومات
            </Typography>
          </Box>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    نوع ترانسپورت
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    نوع محصول
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    شرکت
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    محصول
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    کشور مبدا
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    کشور مقصد
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    تعداد واگن
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    وزن (تن)
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    تعداد بار
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    تاریخ خروج
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'right'
                    }}
                  >
                    تاریخ ورود
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Add your table data here */}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={0} // Replace with actual data length
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
            labelRowsPerPage="ردیف در هر صفحه:"
            labelDisplayedRows={({ from, to, count }) => 
              `${from}-${to} از ${count}`
            }
            sx={{ direction: 'ltr' }}
          />
        </Paper>
      </ThemeProvider>
    </PageContainer>
  );
}

