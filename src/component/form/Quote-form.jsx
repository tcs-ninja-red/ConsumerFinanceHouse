import React, { Component } from "react";
//import { Field } from "redux-form";
//import { SampleField } from "../sample-field";
import "../../styles/quote.css";

export class QuoteForm extends Component {
  constructor() {
    super();
    //set state properties
    this.state = {
      financial: {
        product: "PCP",
        cash_price: 10000,
        deposit_amount: 2000,
        term: 24,
      },
      vehicle: {
        vehicle_mileage: 5000,
        registration_month: 1,
        registration_year: 2020,
        make: "Ford",
        model: "Focus",
        description: "2019 model",
        model_year: 2019,
      },
      excess_mileage: 0,
      max_annual_mileage: 6000,
      first_payment_amount: 0,
      monthly_payment_amount: 0,
      final_payment_amount: 6500,
      amount_of_credit: 8000,
      total_charge_for_credit: 1600,
      fixed_rate_interest: 10,
      apr: 10,
      total_amount_payable: 9600,
      priceVal: "50000",
      makeVal: "Ford",
      modelVal: "Focus",
      descVal: "2019 model",
      colorVal: "metallic white",
      transVal: "Automatic",
      bodyVal: "Hatchback",
      termList: ["12", "24", "36", "42", "48", "52", "60"],
      depositList: ["1000", "2000", "5000", "6000", "8000", "10000"],
      mileageList: [
        "5000",
        "10000",
        "15000",
        "20000",
        "25000",
        "30000",
        "35000",
        "40000",
        "45000",
      ],
      postCode: "",
    };

    //bind Make onchange event
    /*
        this.handleChangeMake = this.handleChangeMake.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
        */
  }

  /*
    componentDidMount() {
        this.props.getVehicleMakes();
    }


    handlePostCodeChange(event) {
        this.setState({ postCode: event.target.value });
    }*/

  render() {
    console.log("fin house11");
    //const { postcode } = this.props;
    const { QuoteState, financeHouseState, toProposal } = this.props;

    //console.log({financeHouseState.makeValue});
    //const { financeHouseState } = this.props;
    //const { searchResults } = this.props.dealerSearchResult;
    console.log("fin22", QuoteState);
    console.log("fin33", financeHouseState);
    return (
      <React.Fragment>
        <div className="quotes-container">
          {/* <a className="navbar-brand" href="#">
            <img
              className="logo-small"
              src={require("../../assets/images/logo.png")}
            />
          </a> */}
          <span className="is-size-3">Choose your Quote</span>
          <hr className="heading-divider" />
          <div className="level">
            <div className="level-item has-text-centered">
              <p className="subtitle is-4">
                <strong>Vehicle Summary</strong>
              </p>
            </div>
          </div>

          <br />

          <div className="data-container ">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <strong>Make : </strong>

                    <span>{financeHouseState.vehicleDetails[0].make_name}</span>
                  </div>
                  <div className="column">
                    <strong>Model : </strong>
                    <span>
                      {financeHouseState.vehicleDetails[0].model_name}
                    </span>
                  </div>
                  <div className="column">
                    <strong>Description : </strong>
                    <span>
                      {financeHouseState.vehicleDetails[0].description}
                    </span>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <strong>Price : </strong>
                    <span>
                      {financeHouseState.vehicleDetails[0].cash_price}
                    </span>
                  </div>
                  <div className="column">
                    <strong>Transmission : </strong>
                    <span>
                      {financeHouseState.vehicleDetails[0].transmission}
                    </span>
                  </div>
                  <div className="column">
                    <strong>Body Style : </strong>
                    {/*financeHouseState.vehicleDetails &&
                                            financeHouseState.vehicleDetails.length > 0 ? (
                                                financeHouseState.vehicleDetails.map((model, idx) => (
                                                    <span key={idx}>{model.body_style}</span>
                                                ))
                                            ) : (
                                                <span>{""}</span>
                                            )*/}
                    <span>
                      {financeHouseState.vehicleDetails[0].body_style}
                    </span>
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <strong>Color : </strong>
                    <span>{financeHouseState.vehicleDetails[0].color}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="heading-divider" />
          <div className="level">
            <div className="level-item has-text-centered">
              <p className="subtitle is-4">
                <strong>Choose Term, Deposit and Mileage</strong>
              </p>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <strong>Term:</strong>
                <select
                  className="form-control"
                  onChange={this.handleChangeMake}
                >
                  <option className="dorpdowns" value="5000"></option>
                  {/*
                                                            this.state.makeList.map((make) => (
                                                                <option key={make.id} value={make.id}>
                                                                    {make.value}
                                                                </option>
                                                            ))*/}
                  {this.state.termList &&
                    this.state.termList.length > 0 &&
                    this.state.termList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <strong>Cash Deposit:</strong>
                <select
                  className="form-control md"
                  onChange={this.handleChangeModel}
                >
                  <option value="0"></option>
                  {this.state.depositList &&
                    this.state.depositList.length > 0 &&
                    this.state.depositList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-sm">
              <div className="form-group">
                <strong>Annual Mileage:</strong>
                <select
                  className="form-control md"
                  onChange={this.handleChangeDesc}
                >
                  <option value="0"></option>

                  {
                    this.state.mileageList &&
                      this.state.mileageList.length > 0 &&
                      this.state.mileageList.map((model, idx) => (
                        <option key={idx} value={idx}>
                          {model}
                        </option>
                      ))
                    // : (
                    //   <span>
                    //     {financeHouseState.dealerSearchResults.message}
                    //   </span>
                    // )
                  }
                </select>
              </div>
            </div>
          </div>

          <div className="level">
            <div className="level-item has-text-centered">
              <button
                onClick={() =>
                  this.props.getVehicleQuotes(
                    this.state.Product,
                    this.state.cash_price
                  )
                }
                className="button is-primary"
              >
                Get Quote
              </button>
            </div>
          </div>

          <hr className="heading-divider" />
          <div className="columns is-gapless">
            <div className="column">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <div className="is-size-5">
                    <strong>Hire Purchase</strong>
                  </div>
                </div>
              </div>
              <br />
              <div className="data-container ">
                <div className="columns">
                  <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="columns">
                      <div className="column">60 monthly payments of</div>
                      <div className="column">
                        <span>
                          {" "}
                          {QuoteState.QuoteResults.monthly_payment_amount}{" "}
                        </span>
                        {/*QuoteState.QuoteResults &&
                                                    QuoteState.QuoteResults.length > 0 ? (
                                                        QuoteState.QuoteResults.map((model, idx) => (
                                                            <span key={idx}>{model.monthly_payment_amount}</span>
                                                        ))
                                                    ) : (
                                                        <span>{""}</span>
                                                    )*/}
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Term of agreement</div>
                      <div className="column">
                        <span> {this.state.financial.term} </span>
                        {/*QuoteState.QuoteResults &&
                                                    QuoteState.QuoteResults.length > 0 ? (
                                                        QuoteState.QuoteResults.map((financial) => (
                                                            <span>{financial.term}</span>
                                                        ))
                                                    ) : (
                                                        <span>{""}</span>
                                                    )*/}
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">First payment</div>
                      <div className="column">
                        <span>
                          {" "}
                          {QuoteState.QuoteResults.first_payment_amount}{" "}
                        </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Final payment</div>
                      <div className="column">
                        <span>
                          {" "}
                          {QuoteState.QuoteResults.final_payment_amount}{" "}
                        </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Cash price</div>
                      <div className="column">
                        <span> {this.state.financial.cash_price} </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Your deposit</div>
                      <div className="column">
                        <span> {this.state.financial.deposit_amount} </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Total Deposit</div>
                      <div className="column">
                        <span> {this.state.financial.deposit_amount} </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Amount of credit</div>
                      <div className="column">
                        <span>
                          {" "}
                          {QuoteState.QuoteResults.amount_of_credit}{" "}
                        </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Total charge for credit</div>
                      <div className="column">
                        <span>
                          {" "}
                          {QuoteState.QuoteResults.total_charge_for_credit}{" "}
                        </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Fixed rate of interest</div>
                      <div className="column">
                        <span> {QuoteState.QuoteResults.apr} </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">A.P.R</div>
                      <div className="column">
                        <span> {QuoteState.QuoteResults.apr} </span>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">Total amount payable</div>
                      <div className="column">
                        <span>
                          {" "}
                          {QuoteState.QuoteResults.total_amount_payable}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="columns is-mobile">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <button
                    className="button is-primary is-medium is-fullwidth"
                    onClick={toProposal}
                  >
                    Apply for hire purchase
                  </button>
                </div>
              </div>
            </div>
            <span className="vertical-divider has-text-justified" />
            <div className="column">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <div className="is-size-5">
                    <strong>Personal Contract Purchase</strong>
                  </div>
                </div>
              </div>
              <div className="column is-three-fifths is-offset-one-fifth">
                <div className="columns">
                  <div className="column">60 monthly payments of</div>
                  <div className="column">£101.37</div>
                </div>
                <div className="columns">
                  <div className="column">Term of agreement</div>
                  <div className="column">60 months</div>
                </div>
                <div className="columns">
                  <div className="column">First payment</div>
                  <div className="column">£101.37</div>
                </div>
                <div className="columns">
                  <div className="column">Optional final payment</div>
                  <div className="column">£1,960.37</div>
                </div>
                <div className="columns">
                  <div className="column">Cash price</div>
                  <div className="column">£6,989.00</div>
                </div>
                <div className="columns">
                  <div className="column">Your deposit</div>
                  <div className="column">£1,000.00</div>
                </div>
                <div className="columns">
                  <div className="column">Total Deposit</div>
                  <div className="column">£1,000.00</div>
                </div>
                <div className="columns">
                  <div className="column">Amount of credit</div>
                  <div className="column">£5,989.00</div>
                </div>
                <div className="columns">
                  <div className="column">Total charge for credit</div>
                  <div className="column">£1,952.57</div>
                </div>
                <div className="columns">
                  <div className="column">Annual milage</div>
                  <div className="column">10,000</div>
                </div>
                <div className="columns">
                  <div className="column">Excess milage</div>
                  <div className="column">1.68 ppm</div>
                </div>
                <div className="columns">
                  <div className="column">Fixed rate of interest</div>
                  <div className="column">9.90%</div>
                </div>
                <div className="columns">
                  <div className="column">A.P.R</div>
                  <div className="column">9.9% A.P.R</div>
                </div>
                <div className="columns">
                  <div className="column">Total amount payable</div>
                  <div className="column">£8,941.57</div>
                </div>
              </div>
              <br />
              <div className="columns is-mobile">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <button
                    className="button is-primary is-medium is-fullwidth"
                    onClick={toProposal}
                  >
                    Apply for personal contract purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

QuoteForm.propTypes = {};

QuoteForm.defaultProps = {};
