import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Artclies from '../components/Artclies';
import Athor from '../components/Athor';

const Home = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} mt={4}> 
                    <Typography component='h3' variant='h5' mb={3} fontWeight={700} > Athor</Typography>
                    <Athor/>
                </Grid>
                <Grid item xs={12} md={9} mt={4} > 
                <Typography component='h3' variant='h5' mb={3} fontWeight={700} >Artclies </Typography>
                <Artclies/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;