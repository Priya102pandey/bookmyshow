import React, { useEffect,useState } from "react";
import "./App.css";
import Movie from "./movie";
import Filter from "./filter";


const Api = () => {
    const [filter,setFilter]= useState([]);
    const [geners,setgenres]= useState('all');
    const [popular,setpopular]=useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=6634c7535f197ed164f94a6f5857a35d&language=en-US&page=1";

useEffect(() => {
    fetchPopular();
  },[]);

const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setpopular(movies.results)
    setFilter(movies.results)
  };

return (
    <div className="App">
      <h1>Hello App Component</h1>
      <Filter popular={popular} setFiltered={setFilter} activeGenre={geners} setActiveGenre={setgenres} />
      <div className="App">
      <h1>Movies</h1>
      {filter.map((movie) => {
       return <Movie key={movie.id} movie={movie}/>
      })}
    </div>
    </div>
  );
};
export default Api;