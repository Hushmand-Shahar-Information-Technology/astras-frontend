"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { usePathname, useRouter } from "next/navigation";

// Import your icons
import TrainIcon from "@mui/icons-material/Train";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BuildIcon from "@mui/icons-material/Build";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import StorefrontIcon from "@mui/icons-material/Storefront";

// Define the navigation structure
export const NAVIGATION = [
  {
    segment: 'station',
    title: 'آمریت خط استیشن',
    icon: <TrainIcon />,
    children: [
      {
        segment: 'TrainStation',
        title: 'فورم ثبت اطلاعات',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'TrainStation/Form-list',
        title: 'لیست فورم ها',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'port_1',
    title: 'آمریت پورت نمبر یک',
    icon: <LocalShippingIcon />,
    children: [
      {
        segment: 'port_1/create',
        title: 'فورم ایجاد',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'port_1/list',
        title: 'لیست فورم ها',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'port_2',
    title: 'آمریت پورت نمبر دو',
    icon: <WarehouseIcon />,
    children: [
      {
        segment: 'port_2/create',
        title: 'فورم ایجاد',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'port_2/list',
        title: 'لیست فورم ها',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'port_3',
    title: 'آمریت پورت نمبر سه',
    icon: <BusinessIcon />,
  },
  {
    segment: 'port_4',
    title: 'آمریت پورت نمبر چهار',
    icon: <AccountBalanceIcon />,
  },
  { kind: 'divider' },
  { kind: 'header', title: 'بخش های دیگر' },
  {
    segment: 'finance',
    title: 'آمریت مالی',
    icon: <AttachMoneyIcon />,
  },
  {
    segment: 'control',
    title: 'آمریت کنترول',
    icon: <SupervisorAccountIcon />,
  },
  {
    segment: 'services',
    title: 'آمریت خدمات',
    icon: <BuildIcon />,
  },
  {
    segment: 'hr',
    title: 'آمریت منابع بشری',
    icon: <PeopleIcon />,
  },
  {
    segment: 'docs',
    title: 'آمریت اسناد و ارتباط',
    icon: <ReceiptIcon />,
  },
  {
    segment: 'commercial',
    title: 'آمریت تجارتی',
    icon: <StorefrontIcon />,
  },
];

// Create theme with RTL support
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    primary: {
      main: 'rgb(59 130 246)',
    },
    background: {
      default: '#f3f4f6',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
        }
      }
    },
  },
});

// Create the context
type AppContextType = {
  navigation: typeof NAVIGATION;
  pathname: string;
  router: ReturnType<typeof useRouter>;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  user: {
    name: string;
    role: string;
    avatar?: string;
  } | null;
};

const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// AppProvider component
export function AppProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || '';
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock user data - replace with real authentication
  const user = {
    name: 'احمد محمدی',
    role: 'مدیر سیستم',
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const contextValue: AppContextType = {
    navigation: NAVIGATION,
    pathname,
    router,
    sidebarCollapsed,
    toggleSidebar,
    user,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
} 