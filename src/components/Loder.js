import { display, height, padding } from '@mui/system';
import React from 'react';
import loader  from '../assets/image/Doctors symbol.gif'

const Loder = () => {
    return (
        <div style={{
            width:'100%',
            height:'100px',
            display:'flex',
            justifyContent:'center',
            paddingTop:'40px',
            marginBottom:'250px',
            marginTop:'150px'

        }}>
            <img src={loader} alt='loader'/>
            
        </div>
    );
};

export default Loder;