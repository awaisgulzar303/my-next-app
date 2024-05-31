"use client";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname(); // To get the current path
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(pathname); // Set the active path when the component mounts
  }, [pathname]);

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <SpaceDashboardIcon />,
        },
        {
          title: "User",
          path: "/dashboard/user",
          icon: <AccessibilityIcon />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <ProductionQuantityLimitsIcon />,
        },
        {
          title: "Transaction",
          path: "/dashboard/transaction",
          icon: <LocalAtmIcon />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <AttachMoneyIcon />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <AssessmentIcon />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <GroupsIcon />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <SettingsSuggestIcon />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <QuestionMarkIcon />,
        },
      ],
    },
  ];

  const handleClick = (path) => {
    router.push(path);
    setActivePath(path); 
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.user}>
        <Avatar />
        <Box>
          <Typography variant="h6">Awais Gulzar</Typography>
          <Typography className={styles.userRole}>Administration</Typography>
        </Box>
      </Box>
      <List sx={{borderRadius:"10px"}}>
        {menuItems.map((menuItem, index) => (
          <Box key={index}>
            <Typography variant="subtitle1">{menuItem.title}</Typography>
            {menuItem.list.map((listItem, idx) => (
              <ListItem
                key={idx}
                sx={{
                  mt: 1.5,
                  backgroundColor: activePath === listItem.path ? "#2e374a" : "inherit",
                  ":hover": {
                    backgroundColor: "#2e374a",
                  },
                  color: activePath === listItem.path ? "white" : "inherit",
                }}
                onClick={() => handleClick(listItem.path)}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  {listItem.icon}
                </ListItemIcon>
                <ListItemText>{listItem.title}</ListItemText>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
