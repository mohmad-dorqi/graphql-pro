 import React from 'react';
 import { useParams } from 'react-router-dom';
 import { useQuery } from '@apollo/client';
import { GET_ARTICLE_INFO, GET_AUTHOR_INFO } from '../graphql/queryes';


 
 const ArticlePage = () => {
   
    const {slug}=useParams();
    const{data,loading,error}= useQuery(GET_ARTICLE_INFO,{
     variables:{slug},
    });
    console.log({data,loading,error});
    return (
        <div>
            
          
           
        </div>
    );
 };
 
 export default ArticlePage;

 