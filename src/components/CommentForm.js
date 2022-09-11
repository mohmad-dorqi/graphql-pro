import { Grid,Button } from '@mui/material';
import React from 'react';

const CommentForm = () => {
    return (
       <Grid container border='1px silver solid' sx={{boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:4,py:1,mt:8}}>
        <Grid item display='flex' direction='column' margin={3} xs={12}>
            <label>Name:</label>
            <input type='text' style={{height:'30px'}}/>
          
        </Grid>
        <Grid item display='flex' direction='column' margin={3} xs={12}> 
                  <label>Comment:</label>

                 <textArea style={{height:'120px' ,borderRadius:'5px'}} ></textArea>
                
        </Grid>
        <Grid item ml={2.5} mb={2}>
                 <Button variant="contained">
                    Send
                 </Button>
        </Grid>
        
     
       </Grid>
    );
};

export default CommentForm;