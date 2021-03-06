import React from "react"
import './App.css';
import Row from "./components/Row.js"
import requests from "./requests.js"
import Banner from "./components/Banner.js"
import Nav from "./components/Nav.js"
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS"  fetchUrl ={requests.fetchNetflixOrigionals} isLargeRow/>

      <Row title="Treanding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     
    </div>
  );
}

export default App;
