import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
          <main>
              <div className="headbar">
                  <h1 className="maintitle">
                      משימות
                  </h1>
                  <Link to="/add">
                    <button className="plus">
                        <div className="border">
                            <h2>+</h2>
                        </div>
                    </button>
                  </Link>
              </div>
          </main>
      )
    }
}

export default Header;