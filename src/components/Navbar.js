import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import "./style.css";

function Navbar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(interval);
          return prevWidth;
        } else {
          return prevWidth + 4;
        }
      });
    }, 100);

      
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      <nav
        className="navbar navbar-expand-lg "
        style={{ "background-color": "#333399" }}
      >
        <div className="container-fluid">
                  <img src="" style={{"width":"40px","height":"45px"}}></img>
          <a className="navbar-brand text-light" href="/home">
           MemeLeague
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
            <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/home"
                >
                  <HomeIcon/> Home
                </Link>
              </li>
              

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/memes"
                >
                  <QueryStatsIcon/> Memes
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/dashboard"
                >
                 <PersonIcon style={{height:"23px"}}/>Personal Dashboard
                </Link>
              </li>
             
             
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/leaderboard.html"
                >
                  <LeaderboardIcon/> Leaderboard
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div
        className="progress"
        role="progressbar"
        aria-label="Info example"
        id="progress-bar"
        aria-valuenow={width}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          width: `${width}%`,
          fontSize: "0rem",
          height: "3px",
          borderRadius: "0px",
          backgroundColor: "yellow",
        }}
      ></div>
    </div>
  );
}

export default Navbar;
