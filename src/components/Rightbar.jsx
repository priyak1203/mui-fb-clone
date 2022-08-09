import { Avatar, AvatarGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight="400">
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com//static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com//static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Stefy Graph"
            src="https://material-ui.com//static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Alan Donald"
            src="https://material-ui.com//static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Steve Baker"
            src="https://material-ui.com//static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Jake Edward"
            src="https://material-ui.com//static/images/avatar/9.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default Rightbar;
