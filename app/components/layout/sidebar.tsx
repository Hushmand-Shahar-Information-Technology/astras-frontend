"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Person3Icon from "@mui/icons-material/Person3";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Collapse,
  Box,
  Typography,
  Divider
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";

const drawerWidth = 280;

export default function Sidebar() {
  const pathname = usePathname();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menuId: string) => {
    setOpenSubMenu(openSubMenu === menuId ? null : menuId);
  };
  
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'rgb(31 41 55)',
          color: 'white',
          direction: 'rtl',
          borderLeft: 'none', // Remove left border for RTL
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Box sx={{ p: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3, 
            fontWeight: 600,
            textAlign: 'right',
            pr: 1
          }}
        >
          استراس
        </Typography>
        
        <List component="nav" sx={{ pr: 0 }}>
          {/* Station Menu with Submenu */}
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => toggleSubMenu('station')}
              selected={pathname === "/"}
              sx={{
                '&.Mui-selected': { 
                  bgcolor: 'rgb(59 130 246)',
                  '&:hover': { bgcolor: 'rgb(59 130 246)' }
                },
                '&:hover': { bgcolor: 'rgb(59 130 246 / 0.8)' },
                borderRadius: 1,
                py: 1.5,
              }}
            >
              <ListItemIcon sx={{ 
                color: 'white',
                minWidth: 40, // Reduce icon spacing
                mr: -1 // Adjust icon position for RTL
              }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText 
                primary="آمریت خط استیشن"
                sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
              />
              {openSubMenu === 'station' ? 
                <ExpandLess sx={{ ml: -1 }} /> : 
                <ExpandMore sx={{ ml: -1 }} />
              }
            </ListItemButton>
          </ListItem>

          <Collapse in={openSubMenu === 'station'} timeout="auto">
            <List component="div" sx={{ pr: 3, mt: 1 }}>
              <ListItemButton 
                sx={{ 
                  borderRadius: 1,
                  mb: 0.5,
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' }
                }}
              >
                <ListItemText 
                  primary="زیر منو ۱"
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontSize: '0.95rem',
                      color: 'rgb(209 213 219)'
                    }
                  }}
                />
              </ListItemButton>
              <ListItemButton 
                sx={{ 
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' }
                }}
              >
                <ListItemText 
                  primary="زیر منو ۲"
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontSize: '0.95rem',
                      color: 'rgb(209 213 219)'
                    }
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Other menu items */}
          {['یک', 'دو', 'سه', 'چهار'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  '&:hover': { bgcolor: 'rgb(59 130 246 / 0.8)' },
                  borderRadius: 1,
                  my: 0.5,
                  py: 1.5,
                }}
              >
                <ListItemIcon sx={{ 
                  color: 'white',
                  minWidth: 40,
                  mr: -1
                }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText 
                  primary={`آمریت پورت نمبر ${text}`}
                  sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Contact Us */}
          <ListItem disablePadding sx={{ mt: 1 }}>
            <ListItemButton
              sx={{
                '&:hover': { bgcolor: 'rgb(59 130 246 / 0.8)' },
                borderRadius: 1,
                py: 1.5,
              }}
            >
              <ListItemIcon sx={{ 
                color: 'white',
                minWidth: 40,
                mr: -1
              }}>
                <CallIcon />
              </ListItemIcon>
              <ListItemText 
                primary="تماس با ما"
                sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Profile Section */}
      <Box sx={{ 
        mt: 'auto', 
        p: 2, 
        borderTop: 1, 
        borderColor: 'rgba(255, 255, 255, 0.12)'
      }}>
        <ListItemButton
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          sx={{ 
            borderRadius: 1,
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' }
          }}
        >
          <Box 
            sx={{ 
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: 'rgba(255, 255, 255, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ml: 2
            }}
          >
            <Person3Icon />
          </Box>
          <ListItemText 
            primary="احمد محمدی"
            secondary="مدیر سیستم"
            sx={{
              '& .MuiTypography-primary': { fontWeight: 500 },
              '& .MuiTypography-secondary': { color: 'rgb(156 163 175)' }
            }}
          />
          {isProfileMenuOpen ? 
            <ExpandLess sx={{ ml: -1 }} /> : 
            <ExpandMore sx={{ ml: -1 }} />
          }
        </ListItemButton>
        
        <Collapse in={isProfileMenuOpen} timeout="auto">
          <List component="div" sx={{ mt: 1 }}>
            <ListItemButton sx={{ 
              borderRadius: 1,
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' }
            }}>
              <ListItemText primary="پروفایل" />
            </ListItemButton>
            <ListItemButton sx={{ 
              borderRadius: 1,
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' }
            }}>
              <ListItemText primary="تنظیمات" />
            </ListItemButton>
            <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }} />
            <ListItemButton sx={{ 
              color: '#ef4444',
              borderRadius: 1,
              '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.08)' }
            }}>
              <ListItemText primary="خروج" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
    </Drawer>
  );
}
