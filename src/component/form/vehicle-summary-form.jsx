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
                </div>

            </React.Fragment>
        );
    }


}

VehicleSummaryForm.propTypes = {};

VehicleSummaryForm.defaultProps = {};
