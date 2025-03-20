"use client";

import { ReactNode, useEffect, useState } from "react";
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Collapse,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { useApp } from "./AppProvider";
import SideBarProfile from "../profile/sidebar-profile";

const drawerWidth = 280;
const miniDrawerWidth = 65;

interface DashboardLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
  disableCollapsibleSidebar?: boolean;
  defaultSidebarCollapsed?: boolean;
}

export default function DashboardLayout({
  children,
  hideNavigation = false,
  disableCollapsibleSidebar = false,
  defaultSidebarCollapsed = false,
}: DashboardLayoutProps) {
  const { navigation, pathname, router, user, sidebarCollapsed, toggleSidebar } = useApp();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Find which menu should be open based on the current path
    const findOpenMenu = () => {
      const openMenus: Record<string, boolean> = {};
      
      navigation.forEach((item) => {
        if ('children' in item && Array.isArray(item.children)) {
          const isActive = item.children.some(
            (child) => '/' + child.segment === pathname
          );
          if (isActive) {
            openMenus[item.segment] = true;
          }
        }
      });
      
      setOpenSubMenus(openMenus);
    };

    findOpenMenu();
  }, [pathname, navigation]);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else if (!disableCollapsibleSidebar) {
      toggleSidebar();
    }
  };

  const handleSubMenuToggle = (segment: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [segment]: !prev[segment],
    }));
  };

  const isActiveRoute = (segment: string) => {
    return pathname === '/' + segment;
  };

  const isActiveParent = (item: any) => {
    if ('children' in item && Array.isArray(item.children)) {
      return item.children.some((child) => '/' + child.segment === pathname);
    }
    return false;
  };

  const renderNavItems = (items: any[], level = 0) => {
    return items.map((item, index) => {
      // Handle dividers
      if (item.kind === 'divider') {
        return <Divider key={`divider-${index}`} sx={{ borderColor: 'rgba(255, 255, 255, 0.12)', my: 1 }} />;
      }
      
      // Handle headers
      if (item.kind === 'header') {
        return (
          <Typography
            key={`header-${index}`}
            variant="caption"
            sx={{
              px: 3,
              mt: level === 0 ? 2 : 0,
              mb: 1,
              display: sidebarCollapsed ? 'none' : 'block',
              color: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
              textAlign: 'right',
            }}
          >
            {item.title}
          </Typography>
        );
      }
      
      // Handle menu items with children
      if ('children' in item && Array.isArray(item.children)) {
        const isOpen = openSubMenus[item.segment];
        const isActive = isActiveParent(item);
        
        return (
          <Box key={item.segment}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => !sidebarCollapsed && handleSubMenuToggle(item.segment)}
                selected={isActive}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  py: 1,
                  borderRadius: 1,
                  mb: 0.5,
                  justifyContent: 'flex-end',
                  '&.Mui-selected': {
                    bgcolor: 'rgba(59, 130, 246, 0.8)',
                    '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.9)' },
                  },
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'flex-end'
                }}>
                  <Typography sx={{ fontWeight: 500, ml: 2 }}>
                    {item.title}
                  </Typography>
                  {item.icon}
                </Box>
              </ListItemButton>
            </ListItem>
            
            {!sidebarCollapsed && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child: any) => (
                    <ListItemButton
                      key={child.segment}
                      onClick={() => router.push('/' + child.segment)}
                      selected={isActiveRoute(child.segment)}
                      sx={{
                        pr: 4,
                        py: 0.75,
                        minHeight: 40,
                        borderRadius: 1,
                        mx: 1,
                        '&.Mui-selected': {
                          bgcolor: 'rgba(59, 130, 246, 0.8)',
                          '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.9)' },
                        },
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'flex-end'
                      }}>
                        <Typography 
                          sx={{ 
                            fontSize: '0.9rem', 
                            fontWeight: 400, 
                            color: 'rgb(209 213 219)',
                            ml: 2
                          }}
                        >
                          {child.title}
                        </Typography>
                        {child.icon}
                      </Box>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        );
      }
      
      // Handle regular menu items
      return (
        <ListItem key={item.segment} disablePadding>
          <ListItemButton
            onClick={() => router.push('/' + item.segment)}
            selected={isActiveRoute(item.segment)}
            sx={{
              minHeight: 48,
              px: 2.5,
              py: 1,
              borderRadius: 1,
              mb: 0.5,
              justifyContent: 'flex-end',
              '&.Mui-selected': {
                bgcolor: 'rgba(59, 130, 246, 0.8)',
                '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.9)' },
              },
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%'
            }}>
              <Typography sx={{ fontWeight: 500, ml: 2 }}>
                {item.title}
              </Typography>
              {item.icon}
            </Box>
          </ListItemButton>
        </ListItem>
      );
    });
  };

  const drawer = (
    <>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: [1, 2],
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        {!sidebarCollapsed && (
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 600, color: 'white', textAlign: 'right' }}
          >
            استراس
          </Typography>
        )}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: 'white',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
          }}
        >
          {sidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <List sx={{ px: 2, py: 1, flex: 1 }}>
          {renderNavItems(navigation)}
        </List>
        <SideBarProfile isMiniDrawer={sidebarCollapsed} />
      </Box>
    </>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: hideNavigation ? '100%' : `calc(100% - ${sidebarCollapsed ? miniDrawerWidth : drawerWidth}px)` },
          mr: { md: hideNavigation ? 0 : `${sidebarCollapsed ? miniDrawerWidth : drawerWidth}px` },
          ml: 0,
          bgcolor: 'white',
          color: 'text.primary',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, mr: 0, display: { md: hideNavigation ? 'inherit' : 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
            {/* Page title can be added here */}
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Tooltip title="جستجو">
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="اعلان ها">
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="راهنما">
              <IconButton color="inherit">
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {!hideNavigation && (
        <>
          <Box
            component="nav"
            sx={{ 
              width: { md: sidebarCollapsed ? miniDrawerWidth : drawerWidth }, 
              flexShrink: { md: 0 } 
            }}
          >
            {/* Mobile drawer */}
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                  bgcolor: 'rgb(31 41 55)',
                  color: 'white',
                },
              }}
            >
              {drawer}
            </Drawer>
            
            {/* Desktop drawer */}
            <Drawer
              variant="permanent"
              anchor="right"
              sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: sidebarCollapsed ? miniDrawerWidth : drawerWidth,
                  bgcolor: 'rgb(31 41 55)',
                  color: 'white',
                  border: 'none',
                  transition: theme => theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                  overflowX: 'hidden',
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { md: `calc(100% - ${hideNavigation ? 0 : (sidebarCollapsed ? miniDrawerWidth : drawerWidth)}px)` },
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar /> {/* Provides spacing below AppBar */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 3,
            bgcolor: 'background.default',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
} 