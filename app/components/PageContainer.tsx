import { Box, Typography, Paper } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  pageTitle: string;
}

export default function PageContainer({ children, pageTitle }: PageContainerProps) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {pageTitle}
      </Typography>
      {children}
    </Box>
  );
} 