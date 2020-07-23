import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ProposalForm } from '../component/form/proposal-form';
import * as Navigate from '../constants/routes-constant';
import { generateProposal } from "../actions/proposal-actions";

const ProposalPageContainer = new reduxForm({
    form: 'porposalform'
})(ProposalForm);

export const mapStateToProps = state => ({
    fullState: state,
    vehicleDetails: state.financeHouse.vehicleDetails[0],
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
    toProposal: (customerState) => {
        // console.log(customer);

        const proposalInput = {
            dealer_id: "54000001",
            financial: {
                product: "PCP",
                cash_price: 10000,
                deposit_amount: 2000,
                term: 12
            },
            vehicle: {
                vehicle_code: "vh01",
                vehicle_mileage: 5000,
                registration_month: 1,
                registration_year: 2020,
                make: "Ford",
                model: "Focus",
                description: "2019 model",
                model_year: 2019
            },
            excess_mileage: 0,
            max_annual_mileage: 6000,
            first_payment_amount: 113.91,
            monthly_payment_amount: 113.91,
            final_payment_amount: 6500,
            amount_of_credit: 8000,
            total_charge_for_credit: 1120,
            fixed_rate_interest: 7,
            apr: 7,
            total_amount_payable: 9120,
            customer: {
                title: customerState.title,
                fore_name: customerState.foreName,
                middle_name: customerState.middleName,
                surname: customerState.surName,
                date_of_birth: customerState.dob,
                email: customerState.email,
                phone: customerState.telephone,
                gender: customerState.gender,
                marital_status: customerState.maritalStatus,
                country_of_origin: customerState.country,
                address: {
                    address1: customerState.address,
                    address2: '',
                    address3: '',
                    postcode: customerState.postcode,
                    town: '',
                    city: '',
                    time_at_address: customerState.yearsAtAddress
                },
                employment: {
                    occupation: customerState.occupation,
                    years_at_employment: customerState.yearsAtAddress,
                    months_at_employment: customerState.monthsAtEmployment,
                    gross_annual_salary: customerState.grossAnnualSalary
                },
                bank_account: {
                    account_name: customerState.accountName,
                    account_number: customerState.accountNumber,
                    sort_code: customerState.sortCode
                }
            }
        }

        dispatch(generateProposal(proposalInput));

        ownProps.history.push(Navigate.TO_PROPOSAL_DECISION);
    },
    getProposalDetails: (customerState) => {

    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalPageContainer);