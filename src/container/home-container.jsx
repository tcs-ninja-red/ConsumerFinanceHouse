import React, { Component } from "react";
export class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {/* <Navbar click={this.props}></Navbar> */}
          <div className="banner"></div>
          <div className="slider-overlay">
            <h1>Motor Finance that Fits Your Needs</h1>
            <h4>Fast &amp; Online. Rates from 5.9% APR</h4>
            <br />
            {/* <a href="#" data-animation-in="lightSpeedIn">
              APPLY NOW
            </a> */}
            <button className="button is-primary is-medium ">APPLY NOW</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
