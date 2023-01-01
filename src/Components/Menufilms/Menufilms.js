import "./Menufilms.css";
import Error from "../Error/Error";
import NoFound from "../NoFound/NoFound";
import { Link } from "react-router-dom";
import LoadMovies from "../LoadMovies/LoadMovies";

function Menufilms(props) {

  return (
    props.data < 1 
    ? <LoadMovies />
    : props.data === "er" 
    ? <Error />
    : props.data === "nf" 
    ? <NoFound />
    : 
    <div className="ab_menufilms">
      <div className="ctn">
          {
            props.data.map((el) => {
              return (
                <Link className="box" to={`/movie/${el.id}`} key={el.id} 
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="" />
                    <div className="data_film">
                      <div className="name">
                        <h3>name</h3>
                        <p>{el.title}</p>
                      </div>
                      <div className="date">
                        <h3>date</h3>
                        <p>{el.release_date}</p>
                      </div>
                      <div className="value">
                        <h3>evaluation</h3>
                        <p>{el.vote_average}</p>
                      </div>
                    </div>
                </Link>
              )
            })
          }
      </div>
    </div>
  )
}
export default Menufilms;