import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [noOfQuestions, setNoOfQuestions] = useState(4);
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="main-container">
      <h1>Gen AI Web App</h1>
      <div className="form-container">
        
        <div>
          <label htmlFor="query">Enter Query</label>
          <input 
            type="text" 
            id="query" 
            className="query_input" 
            placeholder="Enter the query" 
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
          />
        </div>



        
       

        
      </div>
    </div>
  );
}

export default App;

