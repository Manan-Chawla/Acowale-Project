
import React from 'react';
import NewsFeed from './components/NewsFeed';
import './App.css';

function App() {
  return (
    <>
    <div className='one'>
      <h2 style={{fontSize:"small",textAlign:"center",color:"blue"}}>Acowalian Product by Manan Chawla</h2>
    </div>
    <div className="App">
      <h1 style={{
        fontFamily:"monospace",color:"yellow"
      }}>Acowalian News </h1>
      <br/>
      <hr className='lines'></hr>
      <h1>Enter Cateogry of your fav. topic to get news.</h1>
      <NewsFeed />
    </div>
    </>
  );
}

export default App;
