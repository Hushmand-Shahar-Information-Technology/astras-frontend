import { createTheme } from "@mui/material";

export const theme = createTheme({
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