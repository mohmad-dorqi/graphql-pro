import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';

const Cart = ({athor,slug,photo,writer}) => {
   
    return (
       <Card  sx={{boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:4}} >
        <CardHeader
        avatar={
            <Avatar src={athor.photo[0].url} sx={{marginLift:2}}/>}
            title={
                <Typography component='p' variant='p' color='text.secondary'>
                            {athor.name}
                </Typography>
            }
        />
        <CardMedia  component='img' height='194' image={photo[0].url} alt={slug}/>
        <CardContent>
            <Typography component='h3' variant='h6' color='text.primary'>
                {writer  }
            </Typography>
        </CardContent>
        <Divider variant='middle' sx={{margin:'10px'}}/>
        <CardActions>
            <Button variant='outlined' size='small' sx={{width:'100%',borderRadius: 3}}>Read Artclie</Button>
        </CardActions>

       </Card>
    );
};

export default Cart;