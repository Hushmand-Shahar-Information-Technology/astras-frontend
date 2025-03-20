import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Box, 
  Tabs, 
  Tab, 
  AppBar, 
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Divider
} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    
    // Route to the appropriate page based on tab selection
    switch(newValue) {
      case 0: router.push('/'); break;
      case 1: router.push('/port_1'); break;
      case 2: router.push('/port_2'); break;
      // Add more cases as needed
    }
  };
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0}
      sx={{ 
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        bgcolor: 'white',
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side (appears on right in RTL) - Department menu */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="بخش های دیگر">
            <IconButton 
              color="primary"
              onClick={handleMenuOpen}
              sx={{ mr: 1 }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 500, 
                  color: 'text.primary',
                  ml: 1,
                }}
              >
                بخش ها
              </Typography>
            </IconButton>
          </Tooltip>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => { router.push('/finance'); handleMenuClose(); }}>آمریت مالی</MenuItem>
            <MenuItem onClick={() => { router.push('/control'); handleMenuClose(); }}>آمریت کنترول</MenuItem>
            <MenuItem onClick={() => { router.push('/services'); handleMenuClose(); }}>آمریت خدمات</MenuItem>
            <Divider />
            <MenuItem onClick={() => { router.push('/plan'); handleMenuClose(); }}>آمریت پلان</MenuItem>
            <MenuItem onClick={() => { router.push('/hr'); handleMenuClose(); }}>آمریت منابع بشری</MenuItem>
            <MenuItem onClick={() => { router.push('/docs'); handleMenuClose(); }}>آمریت اسناد و ارتباط</MenuItem>
            <Divider />
            <MenuItem onClick={() => { router.push('/commercial'); handleMenuClose(); }}>آمریت تجارتی</MenuItem>
            <MenuItem onClick={() => { router.push('/tech'); handleMenuClose(); }}>آمریت تخنیک و ترانسپورت</MenuItem>
          </Menu>
        </Box>
        
        {/* Center - Main Tabs */}
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ 
            '& .MuiTab-root': { 
              minWidth: 'auto',
              px: 3,
              py: 2,
              fontWeight: 500,
            },
            '& .Mui-selected': {
              color: 'rgb(59 130 246) !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'rgb(59 130 246)',
            }
          }}
        >
          <Tab label="آمریت خط استیشن" />
          <Tab label="آمریت پورت نمبر یک" />
          <Tab label="آمریت پورت نمبر دو" />
          <Tab label="آمریت پورت نمبر سه" />
          <Tab label="آمریت پورت نمبر چهار" />
        </Tabs>
        
        {/* Right side (appears on left in RTL) - Action buttons */}
        <Box sx={{ display: 'flex' }}>
          <Tooltip title="جستجو">
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="اعلان ها">
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="راهنما">
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
