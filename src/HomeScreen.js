import React from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar.js";
import Banner from "./Banner.js";
import Rows from "./Rows.js";
import requests from "./Requests";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Rows
        title="Netflix Popular Movies"
        fetchUrl={requests.fetchPopularMovies}
        isSmallRow
      />
      <Rows
        title="Netflix Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow
      />
      <Rows
        title="Netflix Now Playing Movies"
        fetchUrl={requests.fetchNowPlayingMovies}
        isLargeRow
      />
      <Rows
        title="Netflix Upcoming Movies"
        fetchUrl={requests.fetchUpcomingMovies}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
