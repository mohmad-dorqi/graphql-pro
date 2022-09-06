import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../graphql/queryes';



const AuthorPage = () => {
   const {slug}=useParams();
   const{data,loading,error}= useQuery(GET_AUTHOR_INFO,{
    variables:{slug},
   });
   console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default AuthorPage;