import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/SideBar';
import Navbar from '../ui/dashboard/navbar/Navbar';
import styles from '../ui/dashboard/dashboard.module.css';

const Layout = ({ children }) => {
  return (
    <Box className={styles.container}>
      <Box position={"sticky"} className={styles.menu}>
      
        <Sidebar />
      </Box>
      <Box className={styles.content}>
        
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
