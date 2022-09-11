import { Avatar, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Comment = ({title,name}) => {
    return (
        <Container maxWidth='lg'>
            <Grid container border='1px silver solid' sx={{boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:4,py:1,mt:8}} >
                <Grid item  xs={12} ml={3} color='primary' display='flex' >
                    <Avatar>{name[0]}</Avatar>
                    <Typography component='h3' variant='h6' ml={2}>
                         {name}:
                    </Typography>
                   
                </Grid>
                <Grid item  xs={12} color='primary' >
                    <Typography component='p' variant='p' color= 'text.secondary' ml={18}>
                            {title}
                    </Typography>

                </Grid>
                

            </Grid>

        </Container>
    );
};

export default Comment;