import React from 'react'
//import styles from "./Search.module.css";

const Search = ({SetSearch}) => {
  return (
    <form className=" "> 
    <input 
    onChange={e=>{
      SetSearch(e.target.value);

    }} placeholder="Search for Characters"type="text" />
    <button className="btn btn-primary">Search</button>
    </form>
  )
}

export default Search