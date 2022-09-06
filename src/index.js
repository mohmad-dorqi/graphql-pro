import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri:"https://api-us-east-1.hygraph.com/v2/cl7ldser116ku01uhgbip4zid/master",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
  
);

