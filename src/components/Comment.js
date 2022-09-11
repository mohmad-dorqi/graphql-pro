import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Comment = ({title,name}) => {
    return (
        <Container maxWidth='lg'>
            <Grid container xs={12} >
                <Grid item  xs={12} color='primary' sx={{background:'#B7C4CF'}}>
                    <Typography component='h3' variant='h5' mt={4}>
                         {name}:
                    </Typography>
                    <Typography component='p' variant='p' color= 'text.secondary'mt={1} ml={12}>
                            {title}
                    </Typography>

                </Grid>

            </Grid>

        </Container>
    );
};

export default Comment;