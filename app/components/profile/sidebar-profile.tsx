"use client";

import { Box, Collapse, List, ListItemButton, ListItemText, Divider } from "@mui/material";
import Person3Icon from "@mui/icons-material/Person3";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface SideBarProfileProps {
  isMiniDrawer: boolean;
}

export default function SideBarProfile({ isMiniDrawer }: SideBarProfileProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  if (isMiniDrawer) {
    return null; // Don't render anything in mini mode
  }

  return (
    <Box
      sx={{
        mt: "auto",
        p: 2,
        borderTop: 1,
        borderColor: "rgba(255, 255, 255, 0.12)",
        transition: (theme) =>
          theme.transitions.create(["opacity", "transform"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
      }}
    >
      <ListItemButton
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        sx={{
          borderRadius: 1,
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "rgba(255, 255, 255, 0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: 2,
          }}
        >
          <Person3Icon />
        </Box>
        <ListItemText
          primary="احمد محمدی"
          secondary="مدیر سیستم"
          sx={{
            "& .MuiTypography-primary": { fontWeight: 500 },
            "& .MuiTypography-secondary": { color: "rgb(156 163 175)" },
          }}
        />
        {isProfileMenuOpen ? (
          <ExpandLess sx={{ ml: -1 }} />
        ) : (
          <ExpandMore sx={{ ml: -1 }} />
        )}
      </ListItemButton>

      <Collapse in={isProfileMenuOpen} timeout="auto">
        <List component="div" sx={{ mt: 1 }}>
          <ListItemButton
            sx={{
              borderRadius: 1,
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" },
            }}
          >
            <ListItemText primary="پروفایل" />
          </ListItemButton>
          <ListItemButton
            sx={{
              borderRadius: 1,
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" },
            }}
          >
            <ListItemText primary="تنظیمات" />
          </ListItemButton>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.12)" }} />
          <ListItemButton
            sx={{
              color: "#ef4444",
              borderRadius: 1,
              "&:hover": { bgcolor: "rgba(239, 68, 68, 0.08)" },
            }}
          >
            <ListItemText primary="خروج" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}
