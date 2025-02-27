import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="TOP RATED MOVIES"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={false}
      />

      <Row
        title="TV SHOWS"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={false}
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="TOP RATED MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </>
  );
};

export default RowList;
