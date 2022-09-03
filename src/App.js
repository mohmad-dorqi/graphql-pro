
import './App.css';
import { gql,useQuery } from '@apollo/client';


function App() {
  const {data}= useQuery(QUERY)
  console.log(data);
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
