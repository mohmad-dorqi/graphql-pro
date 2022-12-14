import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ATHOR } from '../graphql/queryes';
import { useQuery } from '@apollo/client';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import Loder from '../components/Loder';

const Athor = () => {
    const {loading,data}= useQuery(GET_ATHOR)
    console.log(data);
   if (loading)  return <Loder/>
   const {athors}= data;
    return (
        <Grid container  sx={{boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:4}}>
            {
                athors.map((athor,index)=>(
                    <React.Fragment key={athor.id}>
                            <Grid item xs={12} padding={2} >
                            <Link to={`/authors/${athor.slug}`} style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
                                    <Avatar src={athor.photo[0].url} sx={{marginRight:2}}/>
                                    <Typography component='p' variant='p' color= 'text.secondary'>
                                            {athor.name}
                                    </Typography>
                            </Link>
                    </Grid>
                   {
                    index !== athors.length-1 && (
                        <Grid item xs={12}>
                        <Divider variant='middle'/>
                    </Grid>
                    )
                   }

                    </React.Fragment>
                ))
            }
        </Grid>
        
    );
};

export default Athor;