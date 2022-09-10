 import React from 'react';
 import { useNavigate, useParams } from 'react-router-dom';
 import { useQuery } from '@apollo/client';
import { GET_ARTICLE_INFO, GET_AUTHOR_INFO } from '../graphql/queryes';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loder from '../components/Loder';


 
 const ArticlePage = () => {
   
    const {slug}=useParams();
    const navigate=useNavigate()
    const{data,loading,error}= useQuery(GET_ARTICLE_INFO,{
     variables:{slug},
    });
    console.log({data,loading,error});

    if(loading) return <Loder/>
    return (
       <Container maxWidth='lg' >
           <Grid container >
              <Grid item xs={12} mt={4} >
                 <ArrowBackIcon onClick={()=>navigate(-1)} />
              </Grid>
              <Grid item xs={12} mt={4}>
                 {
                    data &&<img src={data.article.photo[0].url} width='100%' height='70%'/>
                 }
              </Grid>
              <Grid item xs={12} display='flex' mb={3}>
                  <Avatar src={data.article.athor.photo[0].url}/>
                  <Typography component='h3' variant='h6' ml={2}>
                     {data.article.athor.name}
                  </Typography>
                 
              </Grid>
              <Grid item xs={12} >
                <Typography component='h3' variant='h5' mb={3}>
                    {data.article.writer}
                </Typography>
                 
              </Grid>
              <Grid item xs={12} mt={4}>
                <Typography component='p' variant='p'>
                    {data.article.text.text}

                </Typography>

              </Grid>

           </Grid>


       </Container>
    );
 };
 
 export default ArticlePage;

 