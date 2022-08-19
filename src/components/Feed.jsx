import React, { useState } from 'react';
import { Box, Skeleton, Stack } from '@mui/material';
import Post from './Post';
import { userData } from '../utils';

function Feed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="text" height={150} />
        </Stack>
      ) : (
        <>
          {userData.map((data) => {
            return <Post key={data.id} {...data} />;
          })}
        </>
      )}
    </Box>
  );
}

export default Feed;
