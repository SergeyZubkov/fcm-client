import React, {useState} from 'react';
import './App.css';
import { getTokens, onMessageListener } from './firebase';

function App() {
  const [isTokenFound, setTokenFound] = useState('');
  getTokens(setTokenFound);

    onMessageListener().then(payload=>{
      console.log(payload)
    }).catch(err=>console.log(err))

  return (
    <div className="App">
      Token: {isTokenFound}
    </div>
  );
}

export default App;
