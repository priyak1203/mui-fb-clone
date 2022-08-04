import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { FacebookSharp } from '@mui/icons-material';

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          FB CLONE
        </Typography>
        <FacebookSharp sx={{ display: { xs: 'block', sm: 'none' } }} />
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
