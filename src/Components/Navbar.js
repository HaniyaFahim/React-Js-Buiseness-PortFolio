import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import "./Footer.css";
import "../Pages/main.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navibar mb-1">
          <div class="container">
            <b>
              {" "}
              <Link className="Link"
                style={{
                  "--hover-textDecorationLine": "underline",
                  "--hover-textDecorationColor": "#a4b3b6",
                  "--hover-textDecorationStyle": "wavy",
                }}
                class="navbar-brand a"
                style={{ color: "white" }}
                to="#"
              >
                Haniya's World
              </Link>
            </b>{" "}
            <button
            style={{color:"whitesmoke"}}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
              <i class="fas fa-bars" style={{color:"#fff" ,fontsize:"28px;"}}></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-md-0 navbar-right">
                <li class="nav-item">
                  <b>
                    {" "}
                    <Link className="Link"
                      style={{
                        "--hover-textDecorationLine": "underline",
                        "--hover-textDecorationColor": "#a4b3b6",
                        "--hover-textDecorationStyle": "wavy",
                      }}
                      class="nav-link active al"
                      style={{ color: "whitesmoke" }}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </b>{" "}
                </li>
                <li class="nav-item">
                  <b>
                    {" "}
                    <Link className="Link"
                      style={{
                        "--hover-textDecorationLine": "underline",
                        "--hover-textDecorationColor": "#a4b3b6",
                        "--hover-textDecorationStyle": "wavy",
                      }}
                      class="nav-link active al"
                      style={{ color: "whitesmoke" }}
                      aria-current="page"
                      to="/About"
                    >
                      About
                    </Link>
                  </b>{" "}
                </li>
                <li class="nav-item">
                  <b>
                    {" "}
                    <Link className="Link"
                      style={{color: "whitesmoke",
                        "--hover-textDecorationLine": "underline",
                        "--hover-textDecorationColor": "#a4b3b6",
                        "--hover-textDecorationStyle": "wavy",
                      }}
                      class="nav-link active al"
                      aria-current="page"
                      to="/Services"
                    >
                      Services
                    </Link>
                  </b>{" "}
                </li>
                <li class="nav-item">
                  <b>
                    {" "}
                    <Link className="Link"
                      style={{
                        "--hover-textDecorationLine": "underline",
                        "--hover-textDecorationColor": "#a4b3b6",
                        "--hover-textDecorationStyle": "wavy",
                      }}
                      class="nav-link active al"
                      style={{ color: "whitesmoke" }}
                      aria-current="page"
                      to="/Blog"
                    >
                      Blogs
                    </Link>
                  </b>{" "}
                </li>
                <li class="nav-item">
                  <b>
                    {" "}
                    <Link className="Link"
                      style={{
                        "--hover-textDecorationLine": "underline",
                        "--hover-textDecorationColor": "#a4b3b6",
                        "--hover-textDecorationStyle": "wavy",
                      }}
                      class="nav-link active al"
                      style={{ color: "whitesmoke" }}
                      aria-current="page"
                      to="/Contact"
                    >
                      Contact
                    </Link>
                  </b>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
