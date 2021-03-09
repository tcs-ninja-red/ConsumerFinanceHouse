import React, { Component } from "react";
import { Field } from "redux-form";
import "../../styles/finhouse.css";
import { TextField, Radio } from 'final-form-material-ui';
import {
    Typography, Paper, Grid, Button, RadioGroup, InputLabel,
    FormLabel, FormControl, FormControlLabel, MenuItem, Select,
} from '@material-ui/core';
import { VehicleSummaryForm } from '../form/vehicle-summary-form';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export class ProposalForm extends Component {

    constructor() {
        super();
        this.state = {
            title: null,
            foreName: null,
            middleName: null,
            surName: null,
            telephone: null,
            email: null,
            dob: null,
            gender: null,
            country: null,
            maritalStatus: null,

            postcode: null,
            address: null,
            yearsAtAddress: null,
            monthsAtAddress: null,

            occupation: null,
            yearsAtEmployment: null,
            monthsAtEmployment: null,
            grossAnnualSalary: null,

            accountName: null,
            accountType: null,
            sortCode: null,
            accountNumber: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const target = event.target;

        this.SaveproposalReq();
    }

    SaveproposalReq = () => {
        const vehicle = this.props.selectedFinHouse.vehicleDetails;
        const quote = this.props.selectedQuote;

        const proposalReqObject = {
            "dealer_id": quote.dealer_id,
            "financial": {
                "product": quote.financial.product,
                "cash_price": quote.financial.cash_price,
                "deposit_amount": quote.financial.deposit_amount,
                "term": quote.financial.term
            },
            "vehicle": {
                "vehicle_code": vehicle.vehicle_code,
                "vehicle_mileage": vehicle.vehicle_mileage,
                "registration_month": vehicle.registration_month,
                "registration_year": vehicle.registration_year,
                "make": vehicle.make_name,
                "model": vehicle.model_name,
                "description": vehicle.description,
                "model_year": vehicle.model_year
            },
            "excess_mileage": quote.excess_mileage,
            "max_annual_mileage": quote.max_annual_mileage,
            "first_payment_amount": quote.first_payment_amount,
            "monthly_payment_amount": quote.monthly_payment_amount,
            "final_payment_amount": quote.final_payment_amount,
            "amount_of_credit": quote.amount_of_credit,
            "total_charge_for_credit": quote.total_charge_for_credit,
            "fixed_rate_interest": quote.fixed_rate_interest,
            "apr": quote.apr,
            "total_amount_payable": quote.total_amount_payable,
            "customer": {
                "title": this.state.title,
                "fore_name": this.state.foreName,
                "middle_name": this.state.middleName,
                "surname": this.state.surName,
                "date_of_birth": this.state.dob,
                "email": this.state.email,
                "phone": this.state.telephone,
                "gender": this.state.gender,
                "marital_status": this.state.maritalStatus,
                "country_of_origin": this.state.country,
                "address": {
                    "address1": this.state.address,
                    "address2": "Address 2",
                    "address3": "Address 3",
                    "postcode": this.state.postcode,
                    "town": "Grangetown",
                    "city": "Cardiff",
                    "time_at_address": (parseInt(this.state.yearsAtAddress) * 12) + parseInt(this.state.monthsAtAddress)
                },
                "employment": {
                    "occupation": this.state.occupation,
                    "years_at_employment": this.state.yearsAtEmployment,
                    "months_at_employment": this.state.monthsAtEmployment,
                    "gross_annual_salary": this.state.grossAnnualSalary
                },
                "bank_account": {
                    "account_name": this.state.accountName,
                    "account_number": this.state.accountNumber,
                    "sort_code": this.state.sortCode
                }

            }
        };

        console.log(proposalReqObject);
        //console.log('Customer object', this.state.title);
        this.props.toProposal(proposalReqObject);
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        const { fullState, selectedFinHouse, selectedQuote, toProposal } = this.props;
        return (
            <React.Fragment>
                <div className="proposal-container">
                    <div className="title-bar">
                        <a className="navbar-brand" href="#">
                            <img className="logo-small" src={require("../../assets/images/logo.png")} />
                        </a>
                        <span className="is-size-3 has-text-weight-medium">Complete your proposal</span>
                    </div>
                    <div className="proposal-content">
                        {/* {this.props.selectedFinHouse && */}
                        <div className="level">
                            <VehicleSummaryForm selectedFinHouse={selectedFinHouse} selectedQuote={selectedQuote}
                            ></VehicleSummaryForm>
                        </div>
                        {/* } */}
                        <form id="proposalForm" onSubmit={this.handleSubmit} >
                            <div>
                                {/* temp */}
                                {/* <div style={{ textAlign: "right" }}>
                                <a style={{ color: "blue" }} onClick={this.setDefaultValues} >Default Value For Testing</a>
                            </div> */}

                                <Paper style={{ padding: 16 }}>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Personal Details
                                        </Typography>
                                    <hr className="heading-divider" />
                                    <div className="proposal-content-form">
                                        <Grid container alignItems="flex-start" spacing={2}>
                                            <Grid item xs={8}>
                                                <InputLabel style={{ marginTop: 16 }} id="title">Title *</InputLabel>
                                                <Select
                                                    name="title"
                                                    labelId="title"
                                                    id="title"
                                                    required
                                                    onChange={this.handleChange}>
                                                    <MenuItem value={'Dr'}>Dr</MenuItem>
                                                    <MenuItem value={'Mr'}>Mr</MenuItem>
                                                    <MenuItem value={'Mrs'}>Mrs</MenuItem>
                                                    <MenuItem value={'Miss'}>Miss</MenuItem>
                                                    <MenuItem value={'Ms'}>Ms</MenuItem>
                                                    <MenuItem value={'Rev'}>Rev</MenuItem>
                                                </Select>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="foreName"
                                                    component={TextField}
                                                    type="text"
                                                    label="ForeName"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    // required
                                                    name="middleName"
                                                    component={TextField}
                                                    type="text"
                                                    label="Middle Name"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="surName"
                                                    component={TextField}
                                                    type="text"
                                                    label="SurName"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="telephone"
                                                    component={TextField}
                                                    type="number"
                                                    label="Telephone"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="email"
                                                    component={TextField}
                                                    type="email"
                                                    label="Email"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <InputLabel style={{ marginTop: 16 }} id="dob">Dateo Of Birth *</InputLabel>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="dob"
                                                    component={TextField}
                                                    type="date"
                                                    //label="Date Of Birth"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <InputLabel id="gender" style={{ marginTop: 16 }} >Gender *</InputLabel>
                                                <Select
                                                    name="gender"
                                                    labelId="gender"
                                                    id="gender"
                                                    required
                                                    onChange={this.handleChange}>
                                                    <MenuItem value={'M'}>Male</MenuItem>
                                                    <MenuItem value={'F'}>Female</MenuItem>
                                                </Select>
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="country"
                                                    component={TextField}
                                                    type="text"
                                                    label="Country of Origin"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <InputLabel style={{ marginTop: 16 }} id="maritalStatus">Marital Status *</InputLabel>
                                                <Select
                                                    name="maritalStatus"
                                                    labelId="maritalStatus"
                                                    id="maritalStatus"
                                                    required
                                                    onChange={this.handleChange}>
                                                    <MenuItem value={'D'}>Divorced</MenuItem>
                                                    <MenuItem value={'M'}>Married</MenuItem>
                                                    <MenuItem value={'S'}>Single</MenuItem>
                                                    <MenuItem value={'W'}>Widow</MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Paper>
                                <br />
                                <Paper style={{ padding: 16 }}>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Current Address
                                    </Typography>
                                    <hr className="heading-divider" />
                                    <div className="proposal-content-form">
                                        <Grid container alignItems="flex-start" spacing={2}>
                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="postcode"
                                                    component={TextField}
                                                    type="text"
                                                    label="Postcode"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="address"
                                                    component={TextField}
                                                    type="text"
                                                    label="Address"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="yearsAtAddress"
                                                    component={TextField}
                                                    type="number"
                                                    label="Years At Address"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    name="monthsAtAddress"
                                                    component={TextField}
                                                    type="number"
                                                    label="Months At Address"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Paper>
                                <br />
                                <Paper style={{ padding: 16 }}>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Employment Details
                                    </Typography>
                                    <hr className="heading-divider" />
                                    <div className="proposal-content-form">
                                        <Grid container alignItems="flex-start" spacing={2}>
                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="occupation"
                                                    component={TextField}
                                                    type="text"
                                                    label="Occupation"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="yearsAtEmployment"
                                                    component={TextField}
                                                    type="number"
                                                    label="Years At Employment"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    name="monthsAtEmployment"
                                                    component={TextField}
                                                    type="number"
                                                    label="Months At Employment"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="grossAnnualSalary"
                                                    component={TextField}
                                                    type="number"
                                                    label="Gross Annual Salary"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                        </Grid>
                                    </div>
                                </Paper>
                                <br />
                                <Paper style={{ padding: 16 }}>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Bank Details
                                    </Typography>
                                    <hr className="heading-divider" />
                                    <div className="proposal-content-form">
                                        <Grid container alignItems="flex-start" spacing={2}>
                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="accountName"
                                                    component={TextField}
                                                    type="text"
                                                    label="Account Name"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            {/* <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="accountType"
                                                    component={TextField}
                                                    type="text"
                                                    label="Account Type"
                                                    onChange={this.handleChange}
                                                />
                                            </Grid> */}

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="sortCode"
                                                    component={TextField}
                                                    type="number"
                                                    label="Sort Code"
                                                    InputProps={{
                                                        inputProps: {
                                                            max: 99999, min: 10000
                                                        }
                                                    }}
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                            <Grid item xs={8}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="accountNumber"
                                                    component={TextField}
                                                    type="number"
                                                    label="Account Number"
                                                    InputProps={{
                                                        inputProps: {
                                                            max: 99999999, min: 10000000
                                                        }
                                                    }}
                                                    onChange={this.handleChange}
                                                />
                                            </Grid>

                                        </Grid>
                                    </div>
                                    <br></br>
                                </Paper>
                                <br />
                                <Grid item style={{ marginTop: 16, marginLeft: 30, marginBottom: 50 }} className="column is-three-fifths is-offset-one-fifth">
                                    <Button className="button is-primary is-medium is-fullwidth"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    // onClick={toProposal}
                                    //disabled={submitting}
                                    >
                                        Generate Proposal
                                </Button>
                                </Grid>
                                <br></br>
                            </div>
                        </form>
                    </div>
                </div>

            </React.Fragment >
        );
    }


}

ProposalForm.propTypes = {};

ProposalForm.defaultProps = {};
