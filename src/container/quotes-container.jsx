import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { QuoteForm } from "../component/form/Quote-form";
import * as Navigate from "../constants/routes-constant";
//import { getQuote } from "../actions/quotes-action";

import { getVehicleQuotes } from "../actions/quotes-action";

const QuotesContainer = new reduxForm({
  form: "QuoteForm",
})(QuoteForm);

export const mapStateToProps = (state) => ({
  QuoteState: state.quote,
  financeHouseState: state.financeHouse,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  getVehicleQuotes: (input) => {
    dispatch(getVehicleQuotes(input));
  },
  toProposal: () => {
    ownProps.history.push(Navigate.TO_PROPOSAL);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
