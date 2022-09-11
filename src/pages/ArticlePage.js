 import React from 'react';
 import { useNavigate, useParams } from 'react-router-dom';
 import { useQuery } from '@apollo/client';
import { GET_ARTICLE_INFO, GET_AUTHOR_INFO } from '../graphql/queryes';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loder from '../components/Loder';
import Comment from '../components/Comment';


 
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
              <Grid item xs={12} mt={13}>
                <Typography component='h3' variant='h4' fontWeight='700'>
                  Comments
                </Typography>
                {
                  data.article.comments.map((comment)=>(
                     <Comment key={comment.name} name={comment.name} title={comment.comment} />
                  ))
                }

              </Grid>

           </Grid>


       </Container>
    );
 };
 
 export default ArticlePage;

 