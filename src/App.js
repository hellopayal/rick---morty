import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Search from "./components/Search/Search";
import Card from "./components/Card/Cards";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
//import Navbar from "./components/Navbar/Navbar";

//import Episodes from "./Pages/Episodes";
//import Location from "./Pages/Location";


{/*function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}*/}





function App() {
  let [pageNumber, updatePageNumber] = useState(1);
  //console.log(pageNumber);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchData] = useState([]);
  let { info, results } = fetchedData;
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");



  //console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api)
        .then(results => results.json())
      //console.log(data.results);
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter updateStatus={updateStatus} updatePageNumber={updatePageNumber} updateGender={updateGender} updateSpecies={updateSpecies} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
    </div>

  );
}

export default App;
