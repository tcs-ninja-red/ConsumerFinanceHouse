import React, { Component } from "react";
import { connect } from "react-redux";
import * as Navigate from "../constants/routes-constant";
import { Navbar } from "./navbar";
import Background from "../banner.jpg";
export class HomeContainer extends Component {
  //   styles = {
  //     backgroundImage: `url(${Background})`, //"#088da5"
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     width: "auto",
  //     height: "450px",
  //   };
  render() {
    const { onQuote, onForm } = this.props;

    return (
      <React.Fragment>
        <div>
          {/* Home Page
          <button onClick={onQuote}>Go To Quotes</button>
          <button onClick={onForm}>Go To Finance House</button> */}

          <Navbar></Navbar>
          <div className="banner"></div>
        </div>
      </React.Fragment>
    );
  }
}

// HomeContainer.propTypes = {};

// HomeContainer.defaultProps = {};

// export const mapStateToProps = (state) => ({
//   fullState: state,
// });

// export const mapDispatchToProps = (dispatch, ownProps) => ({
//   onQuote: () => {
//     //ownProps.history.push(Navigate.TO_QUOTES);
//   },
//   onForm: () => {
//     //ownProps.history.push(Navigate.TO_FORM);
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default HomeContainer;
