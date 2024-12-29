import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import {
  Home as HomeFilled,
  HomeOutlined,
  Work as WorkFilled,
  WorkOutline,
  Person as PersonFilled,
  PersonOutline,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'Home',
    filledIcon: <HomeFilled />,
    outlinedIcon: <HomeOutlined />,
    route: '/',
  },
  {
    label: 'Jobs',
    filledIcon: <WorkFilled />,
    outlinedIcon: <WorkOutline />,
    route: '/jobs',
  },
  {
    label: 'Profile',
    filledIcon: <PersonFilled />,
    outlinedIcon: <PersonOutline />,
    route: '/profile',
  },
];

function NavigationMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Update selectedIndex based on the current route
  useEffect(() => {
    const currentPath = location.pathname;
    const index = menuItems.findIndex((item) => item.route === currentPath);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [location]);

  const handleClick = (index, route) => {
    setSelectedIndex(index);
    navigate(route);
  };

  return (
    <Box className="flex flex-row gap-10">
      {menuItems.map((item, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ cursor: 'pointer' }}
          onClick={() => handleClick(index, item.route)}
        >
          {/* Conditional Rendering for Filled or Outlined Icon */}
          {selectedIndex === index ? item.filledIcon : item.outlinedIcon}
          <Typography
            variant="caption"
            mt={1}
            sx={{ fontWeight: selectedIndex === index ? 'bold' : 'normal' }}
          >
            {item.label}
          </Typography>
          <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: selectedIndex === index ? '#FFCC00' : 'transparent',
                  marginTop: '1px',
                  borderRadius: '1px',
                  border: selectedIndex === index ? '2px dashed #FFCC00' : 'none',
                }}
              />
            
        </Box>
      ))}
    </Box>
  );
}

export default NavigationMenu;
