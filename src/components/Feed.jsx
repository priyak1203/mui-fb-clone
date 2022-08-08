import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';
import { userData } from '../utils';

function Feed() {
  return (
    <Box flex={4} p={2}>
      {userData.map((data) => {
        return <Post key={data.id} {...data} />;
      })}
    </Box>
  );
}

export default Feed;
