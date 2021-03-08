import React, { Component } from "react";
import "../styles/home.css";

export class Navbar extends Component {
  render() {
    const { onFinanceHouse, onDealerForm, onHome } = this.props;
    return (
      <React.Fragment>
        <div className="nav-container nav-top">
          <nav className="level">
            <div className="level-left">
              <div className="logo-wrapper">
                <div>
                  <a href="#" onClick={onHome}>
                    <img
                      className="logo"
                      src={require("../../src/assets/images/logo.png")}
                    />
                  </a>
                </div>
                <div className="logo-text-top">
                  <span className="is-size-7">NINJA MOTOR FINANCE</span>
                </div>
              </div>
            </div>
            <div className="level-right">
              <p class="level-item">
                <a className="link is-size-6" href="#" onClick={onHome}>
                  Home
                </a>
              </p>
              <p class="level-item">
                <a className="link is-size-6">About us</a>
              </p>
              <p class="level-item">
                <a className="link is-size-6">Support</a>
              </p>
              <p class="level-item">
                <a className="link is-size-6">Contact us</a>
              </p>
            </div>
            {/* <div className="level-right">
              <span className="is-size-3">NINJA MOTOR FINANCE</span>
            </div> */}
          </nav>
        </div>
      </React.Fragment>
    );
  }
  // styleBg = {
  //   backgroundColor: "#07294d", //"#c6d0dd",
  // };
  // render() {
  //   const { onQuote, onForm, onHome, onDealerForm } = this.props;
  //   console.log("onQuote", onQuote);
  //   return (
  //     <div>
  //       <nav className="navbar navbar-expand-lg" style={this.styleBg}>
  //         <a className="navbar-brand" href="#">
  //           <img className="logo" src={require("../assets/images/logo.png")} />
  //         </a>
  //         <button
  //           className="navbar-toggler"
  //           type="button"
  //           data-toggle="collapse"
  //           data-target="#navbarText"
  //           aria-controls="navbarText"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarText">
  //           <ul className="navbar-nav mr-auto">
  //             <li className="nav-item active">
  //               <a className="nav-link" href="#" onClick={onHome}>
  //                 HOME
  //                 <span className="sr-only">(current)</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="#" onClick={onForm}>
  //                 FINANCE
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="#" onClick={onQuote}>
  //                 QUOTE
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="#">
  //                 PROPOSAL
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="#" onClick={onDealerForm}>
  //                 DEALER
  //               </a>
  //             </li>
  //           </ul>
  //           <span className="site-name">NINJA MOTOR FINANCE</span>
  //         </div>
  //       </nav>
  //     </div>
  //   );
  // }
}

export default Navbar;
