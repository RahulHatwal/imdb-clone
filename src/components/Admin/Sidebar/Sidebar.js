import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-3">
          <div id="sidebar">
            <div className="container-fluid tmargin">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>

            <ul className="nav navbar-nav side-bar">
              <li className="side-bar tmargin">
                <a href="#">
                  <span className="glyphicon glyphicon-list">&nbsp;</span>
                  Dashboard
                </a>
              </li>
              <li className="side-bar">
                <a href="#">
                  <span className="glyphicon glyphicon-flag">&nbsp;</span>Purok
                </a>
              </li>
              <li className="side-bar">
                <a href="#">
                  <span className="glyphicon glyphicon-star">&nbsp;</span>
                  Blotter
                </a>
              </li>
              <li className="side-bar">
                <a href="#">
                  <span className="glyphicon glyphicon-certificate">
                    &nbsp;
                  </span>
                  Officials
                </a>
              </li>

              <li className="side-bar">
                <a href="#">
                  <span className="glyphicon glyphicon-signal">&nbsp;</span>
                  Statistics
                </a>
              </li>
              <li className="side-bar">
                <a href="#">
                  <span className="glyphicon glyphicon-cog">&nbsp;</span>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
