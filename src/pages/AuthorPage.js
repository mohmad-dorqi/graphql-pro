import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../graphql/queryes';
import { Avatar, Container, Grid, Typography } from '@mui/material';



const AuthorPage = () => {
   const {slug}=useParams();
   const{data,loading,error}= useQuery(GET_AUTHOR_INFO,{
    variables:{slug},
   });
   console.log(data);
   if(loading)  return <h1>Loading</h1>
    return (
        <Container  maxWidth='lg' >
            <Grid container mt={10}>
                <Grid item display='flex' flexDirection='column' alignItems='center' xs={12}>
                  <Avatar src={data.athor.photo[0].url} sx={{width:'250px',height:'250px'}}/>
                  <Typography component='h3' variant='h3' mt={4}>{data.athor.name}</Typography>
                </Grid>
                <Grid item xs={12} mt={7}>
                    {data.athor.about.text}

                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthorPage;