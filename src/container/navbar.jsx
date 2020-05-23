import React, { Component } from "react";
import { connect } from "react-redux";
import * as Navigate from "../constants/routes-constant";
import "./home.css";
export class Navbar extends Component {
  styleBg = {
    backgroundColor: "#c6d0dd",
  };
  render() {
    const { onQuote, onForm } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={this.styleBg}>
          <a className="navbar-brand" href="#">
            <img className="logo" src={require("../logo.png")} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" onClick={onForm}>
                  FINANCE
                </a> */}
                <button onClick={onForm}>Go FINANCE</button>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={onQuote}>
                  QUOTE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROPOSAL
                </a>
              </li>
            </ul>
            <span className="site-name">NINJA MOTOR FINANCE</span>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export const mapStateToProps = (state) => ({
  fullState: state,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuote: () => {
    ownProps.history.push(Navigate.TO_QUOTES);
  },
  onForm: () => {
    ownProps.history.push(Navigate.TO_FORM);
  },
});

//console.log();

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
