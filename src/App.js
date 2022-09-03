
import './App.css';
import { gql,useQuery } from '@apollo/client';

const QUERY= gql`
query {
  articles {
    id
    text {
      text
    }
  }
}


`
function App() {
  const {data}= useQuery(QUERY)
  console.log(data);
  return (
    <div className="App">
     {
       data.articles.map(art => <div key={art.id}>
        <p>{art.text.text}</p>
       </div>
        
        
        
        )
     }
    </div>
  );
}

export default App;
