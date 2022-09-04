import { AppBar, Container, Toolbar,Typography } from '@mui/material';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import React from 'react';


const Header = () => {
    return (
       <AppBar position='sticky'  >
            <Container maxWidth="lg">
                    <Toolbar>
                        <Typography component='h1' variant='h5' fontWeight="bold" flex={1}>
                            Doctor Online
                            
                        </Typography>
                        <MedicationLiquidIcon />
                    </Toolbar>

            </Container>
       </AppBar>
    );
};

export default Header;