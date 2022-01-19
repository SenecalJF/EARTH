import fetchNasa from '../utils/nasaApi';
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Typography } from '@mui/material';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    (async () => {
      let temp = await fetchNasa();
      setData({
        ...temp,
      });
    })();
  }, []);
  console.log(data);

  return (
    <div>
      {' '}
      <div>
        {data == null ? (
          <Spinner />
        ) : (
          <div align='center'>
            {' '}
            {console.log(data)}
            <Grid margin={3}>
              <Card
                sx={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  width: '35%',
                  height: '500px',
                  backgroundColor: '#AA0000',
                }}
              >
                <CardHeader title={data.data.title} />

                <Grid>
                  <CardMedia
                    component='img'
                    height='350'
                    image={data.data.hdurl}
                    alt='ehh'
                  />
                </Grid>

                <CardContent>
                  <Grid align='left'>
                    <Typography>{data.data.date}</Typography>
                    <IconButton aria-label='add to favorites'>
                      <FavoriteIcon
                        onClick={() => {
                          let newLike = likes + 1;
                          setLikes(newLike);
                        }}
                      />
                    </IconButton>

                    {'     '}
                    {likes}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </div>
        )}
      </div>{' '}
    </div>
  );
};

export default HomePage;
