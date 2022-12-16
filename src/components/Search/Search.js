import React from "react";
import styles from "./Search.module.scss";

const Search = ({setSearch,updatePageNumber}) => {
//({setSearch,updatePageNumber}) =>{ 
//let searchBtn = (e) =>{
//e.preventDefault();
//};



return(
<form className="d-flex justify-content-center gap-4 mb-5">
<input onChange={e=>{
    updatePageNumber(1)
    setSearch(e.target.value);
}
} type="text" placeHolder="search the character"className={styles.input}/>
<button onClick={e=> {e.preventDefault()} }type="button" className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
</form>
);
};
export default Search;