import React from 'react';
import { GET_ARTICLES } from '../graphql/queryes';
import { useQuery } from '@apollo/client';
import Cart from '../shared/Card';
import { Grid } from '@mui/material';

const Artclies = () => {
    const {loading,data,error}= useQuery(GET_ARTICLES)
    console.log(data);
    return (
       <Grid container spacing={2}>
                 {
           loading?<h1>loading</h1>  :data.articles.map(article => ( 
           <Grid item xs={12} sm={6} md={4} key={article.id}>
                  <Cart {...article}/>
                 
           </Grid>

           ) )}

       </Grid>
    );
};

export default Artclies;