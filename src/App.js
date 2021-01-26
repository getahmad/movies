import "./App.css";
import Movie from "./components/Movie";
import api from "./api";

function App(props) {
  return (
    <div className="App">
      <h1>HAI</h1>
      <Movie title="NETFLIX ORIGINALS" url={api.fetchNetflixOriginals} />
      <Movie title="Trending Now" url={api.fetchTrending} />
      <Movie title="Top Rate" url={api.fetchTopRated} />
      <Movie title="Action Movies" url={api.fetchActionMovies} />
      <Movie title="Comedy Movies" url={api.fetchComedyMovies} />
      <Movie title="Horror Movies" url={api.fetchHorrorMovies} />
      <Movie title="Romantic Movies" url={api.fetchRomanticMovies} />
      <Movie title="Documentaries" url={api.fetchDocumentaries} />
    </div>
  );
}

export default App;
