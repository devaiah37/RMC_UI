import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
//import Filters from "./components/Filters/Filters";
import Search from "./components/Search/Search";
import "./App.css";
import React, { useEffect, useState } from 'react';


const App = () => {
  const [characterCards, setCharacterCards] = useState([]);
  const [searchs, SetSearch]= useState(" ")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/characters/?name=${searchs}`);
        const data = await response.json();
        setCharacterCards(data.characters);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [searchs]);
  
  return (
    <div className="App">
      <h1 className="text-center"> RICK AND <span className="text-primary"> MORTY</span>
</h1>
<Search SetSearch={SetSearch}/>


  {/* <div className="col-3"> */}
    {/* <Filters /> */}
    {/* </div> */}
    
  
    
        <Cards characterCards={characterCards}/>
      
  </div>

    );
}
export default App;
