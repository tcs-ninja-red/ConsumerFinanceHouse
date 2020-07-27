import React, { Component } from "react";
import "../../styles/finhouse.css";
import { Typography, Paper, } from '@material-ui/core';
import { VehicleSummaryForm } from '../form/vehicle-summary-form';


export class ProposalDecisionForm extends Component {

    constructor() {
        super();
    }

    render() {
        const { proposalSuccess, proposalFail, vehicleDetails, proposalStatus } = this.props;

        return (
            <React.Fragment>
                <div>

                    <a className="navbar-brand" href="#">
                        <img className="logo-small" src={require("../../assets/images/logo.png")} />
                    </a>
                    <span className="is-size-3">Proposal Decision</span>
                    <hr className="heading-divider" />
                    <div className="level">
                        <VehicleSummaryForm vehicle={this.props.vehicleDetails}></VehicleSummaryForm>
                    </div>
                    <br />

                    <div style={{ marginTop: 0 }} className="quotes-container">
                        <Paper>
                            {proposalStatus && <Typography className="quotes-container" variant="h5" component="h2">
                                Something went wrong! Please try again after sometime!
                            </Typography>}
                            {proposalSuccess && <Typography className="quotes-container" variant="h5" component="h2">
                                Decision:  {proposalSuccess}
                            </Typography>}
                            {proposalFail && <Typography className="quotes-container" variant="h5" component="h2">
                                Fail:  {proposalFail}
                            </Typography>}
                            {!proposalSuccess && !proposalFail && <Typography className="quotes-container" variant="h5" component="h2">
                                Something went wrong! Please try again after sometime!  {proposalFail}
                            </Typography>}

                        </Paper>

                    </div>
                </div>

            </React.Fragment>
        );
    }


}

ProposalDecisionForm.propTypes = {};

ProposalDecisionForm.defaultProps = {};
