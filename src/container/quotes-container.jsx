import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { QuoteForm } from "../component/form/Quote-form";
import * as Navigate from "../constants/routes-constant";
//import { getQuote } from "../actions/quotes-action";

import { getVehicleQuotes } from "../actions/quotes-action";
import { getPCPVehicleQuotes } from "../actions/quotes-action";

const QuotesContainer = new reduxForm({
  form: "QuoteForm",
})(QuoteForm);

export const mapStateToProps = (state) => ({
  QuoteState: state.quote,
  PCPQuoteState: state.quote.PCPQuote,
  Quotefinancialstate: state.quote.QuoteResults.financial,
  financeHouseState: state.financeHouse,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  ToQuotes: (quoteInput) => {
    const financial = {
      "product": "HP",
      "cash_price": 10000,
      "deposit_amount": quoteInput.deposit,
      "term": quoteInput.term
    }
    const max_annual_mileage = quoteInput.annual_mileage
    const vehicle = {
      "vehicle_mileage": 5000,
      "registration_month": 1,
      "registration_year": 2020,
      "make": "Ford",
      "model": "Focus",
      "description": "2019 model",
      "model_year": 2019,
      "vehicle_code": "vh01"
    }
    const dealer_id = "50010001"

    // console.log(financial);
    // console.log(max_annual_mileage);
    dispatch(getVehicleQuotes(financial, max_annual_mileage, vehicle, dealer_id));
  },
  ToPCPQuotes: (PCPquoteInput) => {
    const financial = {
      "product": "PCP",
      "cash_price": 10000,
      "deposit_amount": PCPquoteInput.deposit,
      "term": PCPquoteInput.term
    }
    const max_annual_mileage = PCPquoteInput.annual_mileage
    const vehicle = {
      "vehicle_mileage": 5000,
      "registration_month": 1,
      "registration_year": 2020,
      "make": "Ford",
      "model": "Focus",
      "description": "2019 model",
      "model_year": 2019,
      "vehicle_code": "vh01"
    }
    const dealer_id = "50010001"

    // console.log(financial);
    // console.log(max_annual_mileage);
    dispatch(getPCPVehicleQuotes(financial, max_annual_mileage, vehicle, dealer_id));
  },
  toProposal: () => {
    ownProps.history.push(Navigate.TO_PROPOSAL);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
