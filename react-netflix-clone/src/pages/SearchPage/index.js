import axios from "../../api/axios.js";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";

export default function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie">
                <div className="movie__column-poster">
                  <img src={movieImageUrl} alt="" className="movie__poster" />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다. </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}
