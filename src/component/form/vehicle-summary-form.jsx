import React, { Component } from "react";
import "../../styles/finhouse.css";
import { Typography, Paper, } from '@material-ui/core';

export class VehicleSummaryForm extends Component {

    constructor() {
        super();
    }

    getBrandLogo(dealer_name) {
        console.log('dealer_name', dealer_name)
        switch (dealer_name) {
            case "Hexa":
                return (
                    <img
                        className="logo-mall"
                        src={require("../../assets/images/hexa.png")}
                    />
                );
            case "Circle":
                return (
                    <img
                        className="logo-mall"
                        src={require("../../assets/images/circle.png")}
                    />
                );
            case "Treva":
                return (
                    <img
                        className="logo-mall"
                        src={require("../../assets/images/treva.png")}
                    />
                );
            case "Aven":
                return (
                    <img
                        className="logo-mall"
                        src={require("../../assets/images/aven.png")}
                    />
                );
            default:
                return (
                    <img
                        className="logo-mall"
                        src={require("../../assets/images/logo.png")}
                    />
                );
        }
    }

    getGender(gender) {
        console.log('gender', gender)
        switch (gender) {
            case "M":
                return "Male";
            case "F":
                return "Female";
            default:
                return "Male";
        }
    }

    getMaritalStatus(maritalStatus) {
        console.log('maritalStatus', maritalStatus)
        switch (maritalStatus) {
            case "D":
                return "Divorced";
            case "M":
                return "Married";
            case "S":
                return "Single";
            case "W":
                return "Widow";
            default:
                return "Single";
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.selectedFinHouse &&

                        <div class="box">
                            <div class="columns">
                                <div class="column is-one-quarter">
                                    {this.getBrandLogo(this.props.selectedFinHouse.dealerDetails.dealer_name)}
                                </div>
                                <div class="column">
                                    <span className="plan-header is-size-4 has-text-weight-medium">{this.props.selectedFinHouse.vehicleDetails.make_name} - {this.props.selectedFinHouse.vehicleDetails.model_name} - {this.props.selectedFinHouse.vehicleDetails.description}</span>
                                    <ul>
                                        <li>{this.props.selectedFinHouse.vehicleDetails.transmission}</li>
                                        <li>{this.props.selectedFinHouse.vehicleDetails.body_style}</li>
                                        <li>{this.props.selectedFinHouse.vehicleDetails.body_style}</li>
                                        <li>{this.props.selectedFinHouse.vehicleDetails.color[0]}</li>
                                    </ul>
                                </div>
                                <div class="column is-one-quarter">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <div className="is-size-3 has-text-weight-bold">{this.props.selectedFinHouse.dealerDetails.dealer_apr}% APR</div>
                                            <br />
                                            <div className="is-size-6">Vehicle cost : £{this.props.selectedFinHouse.vehicleDetails.cash_price}</div>
                                            <br />
                                            <div className="is-size-6">{this.props.selectedFinHouse.dealerDetails.dealer_name}</div>
                                            <div className="is-size-6">Located in: {this.props.selectedFinHouse.dealerDetails.address1}, {this.props.selectedFinHouse.dealerDetails.address2}, {this.props.selectedFinHouse.dealerDetails.city}, {this.props.selectedFinHouse.dealerDetails.postcode}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                    {this.props.selectedQuote &&
                        <div class="box">
                            <div className="is-size-3 has-text-weight-bold">
                                {this.props.selectedQuote.financial.product} Product
                        </div>
                            <div class="columns">
                                <div class="column is-one-quarter">

                                </div>
                                <div class="column">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <div className="is-size-6">
                                                <span>monthly payments of</span>
                                                <span> £ {this.props.selectedQuote.monthly_payment_amount} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>Term of agreement</span>
                                                <span> £ {this.props.selectedQuote.financial.term} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>Final payment</span>
                                                <span> £ {this.props.selectedQuote.monthly_payment_amount} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>Cash price</span>
                                                <span> £ {this.props.selectedQuote.financial.cash_price} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>Your deposit</span>
                                                <span> £ {this.props.selectedQuote.financial.deposit_amount} </span> </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <div className="is-size-6">
                                                <span>Amount of credit</span>
                                                <span> £ {this.props.selectedQuote.amount_of_credit} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>Total charge for credit</span>
                                                <span> £ {this.props.selectedQuote.total_charge_for_credit} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>A.P.R</span>
                                                <span> % {this.props.selectedQuote.apr} </span> </div>
                                            <br />
                                            <div className="is-size-6">
                                                <span>Total amount payable</span>
                                                <span> £ {this.props.selectedQuote.total_amount_payable} </span> </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                    {this.props.selectedProposal &&
                        <div class="box">
                            <div className="is-size-3 has-text-weight-bold">
                                Personal Details
                        </div>
                            <div class="columns">
                                <div class="column is-one-quarter">

                                </div>
                                <div class="column">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <div className="is-size-6">
                                                <br />
                                                <div>
                                                    <span>{this.props.selectedProposal.customer.title} {" "}
                                                        {this.props.selectedProposal.customer.fore_name} {" "}
                                                        {this.props.selectedProposal.customer.middle_name} {" "}
                                                        {this.props.selectedProposal.customer.surname}  </span>
                                                </div>
                                                <br />
                                                <div className="is-size-6">
                                                    <span>Contact at {this.props.selectedProposal.customer.phone} {" "}
                                                        <a href={this.props.selectedProposal.customer.email}>
                                                            {this.props.selectedProposal.customer.email}</a></span> </div>
                                                <br />
                                                <div className="is-size-6">
                                                    <span>DOB: {this.props.selectedProposal.customer.date_of_birth}</span> </div>
                                                <br />
                                                <div className="is-size-6">
                                                    <span>Gender: {this.getGender(this.props.selectedProposal.customer.gender)}</span> </div>
                                                <br />
                                                <div className="is-size-6">
                                                    <span>Country: {this.props.selectedProposal.customer.country_of_origin}</span> </div>
                                                <br />
                                                <div className="is-size-6">
                                                    <span>Marital Status: {this.getMaritalStatus(this.props.selectedProposal.customer.marital_status)}</span> </div>
                                                <br />
                                                <div className="is-size-6">
                                                    <span>Address: {this.props.selectedProposal.customer.address.address1} {", "}
                                                        {this.props.selectedProposal.customer.address.postcode}</span> </div>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </React.Fragment>
        );
    }


}

VehicleSummaryForm.propTypes = {};

VehicleSummaryForm.defaultProps = {};
