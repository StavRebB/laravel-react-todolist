import React from 'react';
import './addHeader.css';
import { Link } from "react-router-dom";

class AddHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
          <main>
              <div className="headbar">
                  <h1 className="maintitle">
                      הוסף משימה
                  </h1>
                  <Link to="/" exact="true">
                    <button className="plus">
                        <div className="border">
                            <h2>-</h2>
                        </div>
                    </button>
                  </Link>
              </div>
          </main>
      )
    }
}

export default AddHeader;