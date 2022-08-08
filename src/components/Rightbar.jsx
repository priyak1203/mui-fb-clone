import { Box } from '@mui/system';
import React from 'react';

function Rightbar() {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed">Rightbar</Box>
    </Box>
  );
}

export default Rightbar;
