import "./Movies.css";
import { useParams } from "react-router-dom";
import React from "react";
import Load from "../Load/Load";
import Error from "../Error/Error";
import Nofound from "../NoFound/NoFound";

function Movies() {

  let idMovies = useParams();
  let [data, setData] = React.useState([]);

  // view movie details
  React.useEffect(() => {

    (async function (movieId) {

      try {

        let api_key = "522a778c9bb94585b521748ae7e4694f",
        language = "en-US";
  
        let fetchData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=${language}`),
            data = await fetchData.json();
            setData(data);

      } catch (error) {

        setData("er");

      }

    }(idMovies.id))

  }, [idMovies.id]);


  return (
    data < 1 
    ? <Load />
    : data === "er" 
    ? <Error />
    : data.status_code === 34
    ? <Nofound />
    :
    <div className="ab_Movies"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
    }}
    >
      <div className="bg">
        <div className="ctn">
          <div className="ab_1">
            <div className="data_film">
              <div className="name">
                <h3>name</h3>
                <p>{data.title}</p>
              </div>
              <div className="date">
                <h3>date</h3>
                <p>{data.release_date}</p>
              </div>
              <div className="value">
                <h3>popularity</h3>
                <p>{data.popularity}</p>
              </div>
              <div className="des">
                <h3>overview</h3>
                <p>
                {data.overview}
                </p>
              </div>
            </div>
            <div className="img">
              <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </div>
          </div>
          <div className="buttons">
            <button 
            onClick={() => {
              window.history.back();
            }}
            >
              tun back
            </button>
            {
              data.homepage.length > 0 ?
              <a href={`${data.homepage}`} target="_blank"
              rel="noreferrer"
              >
                <button>
                  watch now
                </button>
              </a>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Movies;