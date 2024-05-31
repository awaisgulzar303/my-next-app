import { Tab, Box } from "@mui/material";
import React from "react";

const MenuLink = ({ item }) => {
  return (
    <Tab 
      label={item.title}
      icon={item.icon}
      iconPosition="start"
      component="a"
      href={item.path}
    />
  );
};
export default MenuLink;
