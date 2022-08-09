import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" pr={2}>
        <Typography variant="h6" fontWeight="400" mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={7}
          sx={{ justifyContent: 'flex-end', paddingLeft: '10px' }}
        >
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
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Stefy Graph"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Alan Donald"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Steve Baker"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Jake Edward"
            src="https://material-ui.com/static/images/avatar/9.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="400" mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt="breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt="burgers"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt="camera"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight="400" mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/7.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
