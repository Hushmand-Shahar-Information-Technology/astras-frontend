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
} from "@mui/material";
import { Theme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

// Create RTL theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'inherit',
    fontSize: 16,
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

  return (
    <PageContainer pageTitle="">
      <ThemeProvider theme={theme}>
        {/* Page Title */}
        <Box sx={{ mb: 1 }}>
          <Typography 
            variant="h5" 
            component="h1" 
            sx={{ 
              textAlign: 'right',
              fontWeight: 'bold',
              color: '#1976d2',
              mb: 2
            }}
          >
            لیست معلومات ترانسپورت
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'right',
              color: 'text.secondary'
            }}
          >
            در این صفحه میتوانید تمام معلومات ثبت شده را مشاهده کنید
          </Typography>
        </Box>

        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 2 }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader>
              {/* ... rest of your existing table code ... */}
            </Table>
          </TableContainer>
          {/* ... existing pagination ... */}
        </Paper>
      </ThemeProvider>
    </PageContainer>
  );
}

