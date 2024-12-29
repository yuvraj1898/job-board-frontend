import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'Sign up',
    route: '/register',
  },
  {
    label: 'Sign In',
    route: '/login',
  },
];

function PublicHeader() {
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
    <Grid
      container
      md={12}
      style={{ margin: '0 auto', background: 'white', padding: '8px' }}
    >
      <header
        className="flex justify-around p-1"
        style={{
          width: '100%',
        }}
      >
        <div>Logo</div>
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
              {/* Menu Label */}
              <Typography
                variant="caption"
                mt={1}
                sx={{
                  fontWeight: selectedIndex === index ? 'bold' : 'normal',
                  fontSize: '14px',
                }}
              >
                {item.label}
              </Typography>

              {/* Yellow Dashed Line */}
              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: selectedIndex === index ? '#FFCC00' : 'transparent',
                  marginTop: '4px',
                  borderRadius: '1px',
                  border: selectedIndex === index ? '2px dashed #FFCC00' : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </header>
    </Grid>
  );
}

export default PublicHeader;
