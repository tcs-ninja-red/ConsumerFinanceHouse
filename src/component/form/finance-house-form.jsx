import React, { Component } from "react";
import Alert from '../elements/alert'
import { Field } from 'redux-form';
import { InputSelect } from '../elements/input-select';
import { InputField } from '../elements/input-field';

export class FinanceHouseForm extends Component {
  constructor() {
    super();
    //set state properties
    this.state = {
      makeValue: "",
      modelValue: "",
      descValue: "",
      makeList: [],
      modelList: [],
      descList: [],
      postCode: "",
    };

    //bind Make onchange event
    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
  }

  componentDidMount() {
    this.props.getVehicleMakes();
  }

  //make on-change event
  handleChangeMake(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedMake = event.target[selectedIdx].text;
    this.setState({ makeValue: selectedMake });

    this.props.getVehicleModels(selectedMake);
  }

  handleChangeModel(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedModel = event.target[selectedIdx].text;
    this.setState({ modelValue: selectedModel });
    this.props.getVehicleDescriptions(this.state.makeValue, selectedModel);
  }

  handleChangeDesc(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedDesc = event.target[selectedIdx].text;
    this.setState({ descValue: selectedDesc });

    this.props.getVehicleDetails(
      this.state.makeValue,
      this.state.modelValue,
      selectedDesc
    );
  }

  handlePostCodeChange(event) {
    this.setState({ postCode: event.target.value });
  }

  render() {
    console.log("fin house11");
    const { postcode, onQuote } = this.props;
    const { financeHouseState } = this.props;
    //const { searchResults } = this.props.dealerSearchResult;
    console.log("fin22", financeHouseState);
    return (
      <React.Fragment>
        <div className="finance-container">
          <div className="title-bar">
            <a className="navbar-brand" href="#">
              <img className="logo-small" src={require("../../assets/images/logo.png")} />
            </a>
            <span className="is-size-3 has-text-weight-medium">Choose your Car</span>
          </div>
          <div className="finance-content">
            <Alert />
            <br />

            <form>
              <span className="is-size-4 has-text-weight-medium">Let's get started with your choice of car</span>
              <hr className="heading-divider" />
              <br />
              <div className="finance-content-form">
                <Field name="carType"
                  component={InputSelect}
                  label="Car make"
                  labelWidth={110}
                  onChange={this.handleChangeMake}
                  helperText="Pleae chose one of the car make"
                >
                  <option value="" />
                  {financeHouseState.makeList &&
                    financeHouseState.makeList.length > 0 &&
                    financeHouseState.makeList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>
                <br />
                <Field
                  name="carModel"
                  component={InputSelect}
                  label="Car model"
                  labelWidth={110}
                  onChange={this.handleChangeModel}
                  helperText="Pleae chose one of the car model"
                >
                  <option value="" />
                  {financeHouseState.modelList &&
                    financeHouseState.modelList.length > 0 &&
                    financeHouseState.modelList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>
                <br />
                <Field
                  name="carSegment"
                  component={InputSelect}
                  label="Car segment"
                  labelWidth={110}
                  onChange={this.handleChangeDesc}
                  helperText="Pleae chose one of the car segment"
                >
                  <option value="" />
                  {
                    financeHouseState.descriptionList &&
                    financeHouseState.descriptionList.length > 0 &&
                    financeHouseState.descriptionList.map(
                      (model, idx) => (
                        <option key={idx} value={idx}>
                          {model}
                        </option>
                      )
                    )
                  }
                </Field>
                <br />
                <Field
                  name="carColor"
                  component={InputSelect}
                  label="Car color"
                  labelWidth={110}
                  helperText="Pleae chose one of the car color"
                >
                  <option value="" />
                  {financeHouseState.vehicleDetails &&
                    financeHouseState.vehicleDetails.length > 0 && (
                      financeHouseState.vehicleDetails[0].color.map((color, idx) => (

                        <option key={idx} value={idx}>
                          {color}
                        </option>
                      ))
                    )}
                </Field>
                <br />
                <Field
                  component={InputField}
                  labelWidth={175}
                  onChange={this.handlePostCodeChange}
                  name='findDealer'
                  label='Find your nearest dealer'
                  helperText="Please enter your nearest post code"
                />
              </div>
              <br />
              <hr className="heading-divider" />
              <div className="columns is-mobile">
                <div className="column">
                  <button
                    type="button"
                    onClick={() =>
                      this.props.searchDealer(this.state.postCode)
                    }
                    className="button is-primary is-medium"
                  >
                    Find your best dealer
                    </button>
                </div>
              </div>
            </form>
            <br />
            <br />
            <span className="is-size-4 has-text-weight-medium">Your options</span>
            <br />
            <br />
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <img className="logo-mall" src={require("../../assets/images/Chevrolet-logo.png")} />
                </div>
                <div class="column">
                  <span className="plan-header is-size-4 has-text-weight-medium">Chevrolet - Aveo - Medium car 1.4</span>
                  <ul>
                    <li>Manual</li>
                    <li>Petrol</li>
                    <li>Sedan</li>
                    <li>Black</li>
                  </ul>
                  <div className="is-size-6">Vehicle cost : £60,000.00</div>
                  <br />
                  <div className="is-size-6">Located in Cowbridge, South Glamorgan</div>
                </div>
                <div class="column is-one-quarter">
                  <div className="columns is-mobile">
                    <div className="column">
                      <div className="is-size-6">Finance option from</div>
                      <div className="is-size-3 has-text-weight-bold">£584.76</div>
                      <div className="is-size-6">per month</div>
                      <div className="is-size-3 has-text-weight-bold">6.9% APR</div>
                      <br />
                      <div className="columns is-mobile">
                        <div className="column">
                          <button className="button is-primary is-medium" onClick={onQuote}>
                            Proceed to Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <img className="logo-mall" src={require("../../assets/images/Chevrolet-logo.png")} />
                </div>
                <div class="column">
                  <span className="plan-header is-size-4 has-text-weight-medium">Chevrolet - Aveo - Medium car 1.4</span>
                  <ul>
                    <li>Manual</li>
                    <li>Petrol</li>
                    <li>Sedan</li>
                    <li>Black</li>
                  </ul>
                  <div className="is-size-6">Vehicle cost : £60,000.00</div>
                  <br />
                  <div className="is-size-6">Located in Mitcham, Surrey</div>
                </div>
                <div class="column is-one-quarter">
                  <div className="columns is-mobile">
                    <div className="column">
                      <div className="is-size-6">Finance option from</div>
                      <div className="is-size-3 has-text-weight-bold">£884.76</div>
                      <div className="is-size-6">per month</div>
                      <div className="is-size-3 has-text-weight-bold">5.6% APR</div>
                      <br />
                      <div className="columns is-mobile">
                        <div className="column is-full">
                          <button className="button is-primary is-medium" onClick={onQuote}>
                            Proceed to Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <form>
            <section className="sections">
              <div className="row">
                <div className="col-md-7 subsections">
                  <hr />
                  <div className="row">
                    <div className="col-md vehicle-header">
                      <span>{this.state.makeValue}</span>
                      <span>{this.state.modelValue}</span>
                      <span>{this.state.descValue}</span>
                    </div>
                  </div>
                  <div className="vehicle-items">
                    <div className="row vehicle-item">
                      <div className="col-sm">
                        <label>Price(£): </label>
                        {/* <span> {this.state.priceVal}</span> */}
                        {financeHouseState.vehicleDetails &&
                          financeHouseState.vehicleDetails.length > 0 ? (
                            financeHouseState.vehicleDetails.map((model, idx) => (
                              <span key={idx}>{model.cash_price}</span>
                            ))
                          ) : (
                            <span>{""}</span>
                          )}
                      </div>

                      <div className="col-sm">
                        <label>Color: </label>
                        {financeHouseState.vehicleDetails &&
                          financeHouseState.vehicleDetails.length > 0 ? (
                            financeHouseState.vehicleDetails.map((model, idx) => (
                              <span key={idx}>
                                {model.color.toString().substring(0, 130)}
                              </span>
                            ))
                          ) : (
                            <span>{""}</span>
                          )}
                      </div>
                    </div>
                    <div className="row vehicle-item">
                      <div className="col-sm">
                        <label>Transmission: </label>
                        {financeHouseState.vehicleDetails &&
                          financeHouseState.vehicleDetails.length > 0 ? (
                            financeHouseState.vehicleDetails.map((model, idx) => (
                              <span key={idx}>{model.transmission}</span>
                            ))
                          ) : (
                            <span>{""}</span>
                          )}
                      </div>
                      <div className="col-sm">
                        <label>Body Style: </label>
                        {financeHouseState.vehicleDetails &&
                          financeHouseState.vehicleDetails.length > 0 ? (
                            financeHouseState.vehicleDetails.map((model, idx) => (
                              <span key={idx}>{model.body_style}</span>
                            ))
                          ) : (
                            <span>{""}</span>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 subsections bg-new">
                  <div className="row m-4">
                    <label>Find a Dealer</label>
                    <input
                      type="text"
                      placeholder="Enter Postcode"
                      className="form-control"
                    ></input>
                    <button
                      type="button"
                      onClick={() =>
                        this.props.searchDealer(this.state.postCode)
                      }
                      className="button is-primary is-small"
                    >
                      Search
                    </button>
                  </div>
                  <div className="dealer-list">
                    {financeHouseState.dealerSearchResults &&
                      financeHouseState.dealerSearchResults.length > 0 ? (
                        financeHouseState.dealerSearchResults.map(
                          (model, idx) => (
                            //console.log(idx)
                            <div className="row dealer-list-item" key={idx}>
                              <a key={idx}>
                                {model.dealer_name + ", " + model.town}
                              </a>
                            </div>
                          )
                        )
                      ) : (
                        <span>
                          {financeHouseState.dealerSearchResults.message}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </section>
          </form>
          <hr className="heading-divider" />
          <br />
          <div className="columns is-mobile">
            <div className="column">
              <button className="button is-primary is-medium" onClick={onQuote}>
                Proceed to Quote
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

FinanceHouseForm.propTypes = {};

FinanceHouseForm.defaultProps = {};
