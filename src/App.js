import React from "react"
import './App.css';
import Row from "./components/Row.js"
import requests from "./requests.js"
function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS"  fetchUrl ={requests.fetchNetflixOrigionals}/>

      <Row title="Treanding Now" fetchUrl={requests.fetchTrending} />
     
    </div>
  );
}

export default App;
