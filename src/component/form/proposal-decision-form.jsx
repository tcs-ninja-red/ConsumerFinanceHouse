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

                        <div class="box">
                            {proposalStatus &&
                                <Typography className="is-size-6">
                                    Something went wrong! Please try again after sometime!
                            </Typography>}

                            {proposalSuccess && proposalSuccess.decision &&
                                <Typography className="is-size-6">
                                    <div className="is-size-3 has-text-weight-bold">Decision:</div>
                                    <div>{proposalSuccess.decision.decision_message}</div>
                                </Typography>}

                            {proposalFail &&
                                <Typography className="is-size-6">
                                    <div className="is-size-3 has-text-weight-bold">Fail:</div>
                                    <div>
                                        {proposalFail.messages.map((message, idx1) => (
                                            <div className="columns" key={idx1}>
                                                <div className="column">
                                                    <span>
                                                        {message}
                                                    </span></div></div>
                                        ))}
                                    </div>
                                </Typography>}

                            {!proposalSuccess && !proposalFail &&
                                <Typography className="is-size-6">
                                    Something went wrong! Please try again after sometime!
                                    {proposalFail}
                                </Typography>}
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }


}

ProposalDecisionForm.propTypes = {};

ProposalDecisionForm.defaultProps = {};
