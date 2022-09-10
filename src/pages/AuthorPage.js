import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../graphql/queryes';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import Cart from '../shared/Card';



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
                  <Typography component='h4' variant='h4' mt={4}>{data.athor.name}</Typography>
                </Grid>
                <Grid item xs={12} mt={7}>
                    {data.athor.about}

                </Grid>
            </Grid>
            <Grid container spacing={2} mt={8}>
                <Grid item xs={12}>
                    <Typography component='h3' variant='h5' fontWeight={800}>
                        Artclies
                    </Typography>
                </Grid>
                    {
                        data.athor.articles.map((article)=>(
                         <Grid item xs={12} sm={6} md={4} key={article.slug}>
                                    <Cart writer={article.writer} slug={article.slug} photo={article.photo} />
                         </Grid>))
                    }
            </Grid>
        </Container>
    );
};

export default AuthorPage;