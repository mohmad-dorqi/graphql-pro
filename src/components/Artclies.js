import React from 'react';
import { GET_ARTICLES } from '../graphql/queryes';
import { useQuery } from '@apollo/client';

const Artclies = () => {
    const {loading,data,error}= useQuery(GET_ARTICLES)
    console.log(data);
    return (
        <div>
           {
           loading?<h1>loading</h1>  :data.articles.map(article => <div key={article.id}>
               
            </div>)

           }
        </div>
    );
};

export default Artclies;