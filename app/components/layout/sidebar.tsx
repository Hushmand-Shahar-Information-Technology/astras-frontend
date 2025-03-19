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
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TrainIcon from "@mui/icons-material/Train";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SideBarProfile from "../profile/sidebar-profile";
const drawerWidth = 280;
const miniDrawerWidth = 65;

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isMiniDrawer, setIsMiniDrawer] = useState(false);

  const toggleSubMenu = (menuId: string) => {
    setOpenSubMenu(openSubMenu === menuId ? null : menuId);
  };

  const toggleDrawerSize = () => {
    setIsMiniDrawer(!isMiniDrawer);
    if (!isMiniDrawer) {
      setIsProfileMenuOpen(false);
      setOpenSubMenu(null);
    }
  };

  return (
    <Drawer
      sx={{
        width: isMiniDrawer ? miniDrawerWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isMiniDrawer ? miniDrawerWidth : drawerWidth,
          boxSizing: "border-box",
          bgcolor: "rgb(31 41 55)",
          color: "white",
          direction: "rtl",
          borderLeft: "none",
          overflowX: "hidden",
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Box
        sx={{
          p: 2,
          transition: (theme) =>
            theme.transitions.create(["width", "padding"], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            position: "relative",
            pr: isMiniDrawer ? 0 : 1,
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
          }}
        >
          {!isMiniDrawer && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                textAlign: "right",
                flex: 1,
                transition: (theme) =>
                  theme.transitions.create(["opacity", "transform"], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.shorter,
                  }),
                opacity: isMiniDrawer ? 0 : 1,
                transform: isMiniDrawer ? "translateX(-10px)" : "translateX(0)",
              }}
            >
              استراس
            </Typography>
          )}
          <ListItemButton
            onClick={toggleDrawerSize}
            sx={{
              minWidth: 32,
              width: 32,
              height: 32,
              borderRadius: "50%",
              p: 0,
              justifyContent: "center",
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" },
              transition: (theme) =>
                theme.transitions.create(["transform", "background-color"], {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.shorter,
                }),
            }}
          >
            {isMiniDrawer ? (
              <ChevronLeftIcon
                sx={{
                  fontSize: 20,
                  transition: (theme) =>
                    theme.transitions.create("transform", {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.shortest,
                    }),
                }}
              />
            ) : (
              <ChevronRightIcon
                sx={{
                  fontSize: 20,
                  transition: (theme) =>
                    theme.transitions.create("transform", {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.shortest,
                    }),
                }}
              />
            )}
          </ListItemButton>
        </Box>

        <List
          component="nav"
          sx={{
            pr: 0,
            "& .MuiListItemButton-root": {
              transition: (theme) =>
                theme.transitions.create(
                  [
                    "padding-left",
                    "padding-right",
                    "margin",
                    "background-color",
                  ],
                  {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.standard,
                  }
                ),
            },
            "& .MuiListItemIcon-root": {
              transition: (theme) =>
                theme.transitions.create(["margin", "min-width"], {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.standard,
                }),
            },
          }}
        >
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => !isMiniDrawer && toggleSubMenu("station")}
              selected={pathname === "/"}
              sx={{
                minHeight: 48,
                px: 2.5,
                "&.Mui-selected": {
                  bgcolor: "rgb(59 130 246)",
                  "&:hover": { bgcolor: "rgb(59 130 246)" },
                },
                "&:hover": { bgcolor: "rgb(59 130 246 / 0.8)" },
                borderRadius: 1,
                justifyContent: isMiniDrawer ? "center" : "initial",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: isMiniDrawer ? 0 : -1,
                  justifyContent: "center",
                }}
              >
                <TrainIcon />
              </ListItemIcon>
              {!isMiniDrawer && (
                <>
                  <ListItemText
                    primary="آمریت خط استیشن"
                    sx={{
                      opacity: isMiniDrawer ? 0 : 1,
                      "& .MuiTypography-root": { fontWeight: 500 },
                    }}
                  />
                  {openSubMenu === "station" ? (
                    <ExpandLess sx={{ ml: -1 }} />
                  ) : (
                    <ExpandMore sx={{ ml: -1 }} />
                  )}
                </>
              )}
            </ListItemButton>
          </ListItem>

          {!isMiniDrawer && (
            <Collapse in={openSubMenu === "station"} timeout="auto">
              <List component="div" sx={{ pr: 3, mt: 1 }}>
                <ListItemButton>
                  <ListItemIcon
                    sx={{ color: "rgb(209 213 219)", minWidth: 32 }}
                  >
                    <KeyboardArrowLeftIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText onClick={() => router.push("/TrainStation")} primary="فورم ثبت اطلاعات" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    sx={{ color: "rgb(209 213 219)", minWidth: 32 }}
                  >
                    <KeyboardArrowLeftIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="لیست فورم ها" />
                </ListItemButton>
              </List>
            </Collapse>
          )}

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                "&:hover": { bgcolor: "rgb(59 130 246 / 0.8)" },
                borderRadius: 1,
                my: 0.5,
                justifyContent: isMiniDrawer ? "center" : "initial",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: isMiniDrawer ? 0 : -1,
                  justifyContent: "center",
                }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              {!isMiniDrawer && (
                <Link href="/port_1">
                  <ListItemText
                    primary="آمریت پورت نمبر یک"
                    sx={{ "& .MuiTypography-root": { fontWeight: 500 } }}
                  />
                </Link>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                "&:hover": { bgcolor: "rgb(59 130 246 / 0.8)" },
                borderRadius: 1,
                my: 0.5,
                justifyContent: isMiniDrawer ? "center" : "initial",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: isMiniDrawer ? 0 : -1,
                  justifyContent: "center",
                }}
              >
                <WarehouseIcon />
              </ListItemIcon>
              {!isMiniDrawer && (
                <Link href="/port_2">
                  <ListItemText
                    primary="آمریت پورت نمبر دو"
                    sx={{ "& .MuiTypography-root": { fontWeight: 500 } }}
                  />
                </Link>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                "&:hover": { bgcolor: "rgb(59 130 246 / 0.8)" },
                borderRadius: 1,
                my: 0.5,
                justifyContent: isMiniDrawer ? "center" : "initial",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: isMiniDrawer ? 0 : -1,
                  justifyContent: "center",
                }}
              >
                <BusinessIcon />
              </ListItemIcon>
              {!isMiniDrawer && (
                <ListItemText
                  primary="آمریت پورت نمبر سه"
                  sx={{ "& .MuiTypography-root": { fontWeight: 500 } }}
                />
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                "&:hover": { bgcolor: "rgb(59 130 246 / 0.8)" },
                borderRadius: 1,
                my: 0.5,
                justifyContent: isMiniDrawer ? "center" : "initial",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: isMiniDrawer ? 0 : -1,
                  justifyContent: "center",
                }}
              >
                <AccountBalanceIcon />
              </ListItemIcon>
              {!isMiniDrawer && (
                <ListItemText
                  primary="آمریت پورت نمبر چهار"
                  sx={{ "& .MuiTypography-root": { fontWeight: 500 } }}
                />
              )}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <SideBarProfile isMiniDrawer={isMiniDrawer} />
    </Drawer>
  );
}
