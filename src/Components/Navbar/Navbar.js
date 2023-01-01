import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

function Navbar() {

  let [valueInput, seTvalueInput] = React.useState("");

  return (
    <>
      <nav className="nav_page">
        <div className="ctn">
          <Link to="/">
            <h1 className="title">
              movies
            </h1>
          </Link>
          <form className="search"
          onSubmit={(e) => {
            e.preventDefault()
          }}
          >
            <input 
            type="text"
            placeholder="Search"
            value={
              sessionStorage.getItem("valueInputSearch") ?
              sessionStorage.getItem("valueInputSearch") :
              ""
            }
            onChange={(e) => {
              seTvalueInput(e.target.value);
              sessionStorage.setItem("valueInputSearch", e.target.value);
            }
            }
            />
            <Link to={
              valueInput.length > 0 ?
              `/search/${valueInput}`
              : null
            }
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
            >
              <button>
                search
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  )
}
export default Navbar;