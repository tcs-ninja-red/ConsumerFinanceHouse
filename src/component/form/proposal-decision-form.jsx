import React, { Component } from "react";
import "../../styles/finhouse.css";
import { Typography, Paper, } from '@material-ui/core';
import { VehicleSummaryForm } from '../form/vehicle-summary-form';


export class ProposalDecisionForm extends Component {

    constructor() {
        super();
    }

    render() {
        const { proposalSuccess, proposalFail, selectedFinHouse, selectedQuote, selectedProposal, proposalStatus } = this.props;

        return (
            <React.Fragment>
                <div className="proposal-container">

                    <div className="title-bar">
                        <a className="navbar-brand" href="#">
                            <img className="logo-small" src={require("../../assets/images/logo.png")} />
                        </a>
                        <span className="is-size-3 has-text-weight-medium">Proposal Decision</span>
                    </div>

                    <div className="proposal-content">
                        <div className="level">
                            <VehicleSummaryForm selectedFinHouse={selectedFinHouse} selectedQuote={selectedQuote}
                                selectedProposal={selectedProposal} ></VehicleSummaryForm>
                        </div>

                        {/* {this.props.selectedFinHouse && <hr className="heading-divider" />} */}
                        {/* <br /> */}

                        <div style={{ marginTop: 0 }}>
                            <Paper variant="h5" component="h2" gutterBottom >
                                {proposalStatus && <Typography>
                                    Something went wrong! Please try again after sometime!
                            </Typography>}
                                {proposalSuccess && proposalSuccess.decision &&
                                    <Typography variant="h5" component="h2">
                                        Decision:  {proposalSuccess.decision.decision_message}
                                    </Typography>}
                                {proposalFail &&
                                    <Typography variant="h5" component="h2">
                                        Fail:
                                     {/* {proposalFail.messages} */}

                                        {proposalFail.messages.map((message, idx1) => (
                                            <div className="columns" key={idx1}>
                                                <div className="column">
                                                    <span>
                                                        {message}
                                                    </span></div></div>
                                        ))}

                                    </Typography>}
                                {!proposalSuccess && !proposalFail && <Typography variant="h5" component="h2">
                                    Something went wrong! Please try again after sometime!  {proposalFail}
                                </Typography>}

                            </Paper>


                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }


}

ProposalDecisionForm.propTypes = {};

ProposalDecisionForm.defaultProps = {};
