import React from 'react';
import { GET_ARTICLES } from '../graphql/queryes';
import { useQuery } from '@apollo/client';
import Cart from '../shared/Card';
import { Grid } from '@mui/material';
import Loder from '../components/Loder';

const Artclies = () => {
    const {loading,data}= useQuery(GET_ARTICLES)
    console.log(data);
    if (loading)  return <Loder/>;
    return (
       <Grid container spacing={2}>
                 {
            data.articles.map(article => ( 
           <Grid item xs={12} sm={6} md={4} key={article.id}>
                  <Cart {...article}/>
                 
           </Grid>

           ) )}

       </Grid>
    );
};

export default Artclies;