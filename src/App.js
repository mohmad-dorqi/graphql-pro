
import { Routes,Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import AuthorPage from './pages/AuthorPage';
import './App.css';
import Layout from './layout';
import Home from './pages/Home';




function App() {
 
  return (
   <Layout>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/articles/:slug' element={<ArticlePage/>}/>
         <Route path='/author/:slug' element={<AuthorPage/>}/>
     </Routes>
   </Layout>
  );
}

export default App;
