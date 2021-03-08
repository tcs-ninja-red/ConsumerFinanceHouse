import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ProposalForm } from '../component/form/proposal-form';
import * as Navigate from '../constants/routes-constant';
import { generateProposal, SaveProposalReqObj } from "../actions/proposal-actions";

const ProposalPageContainer = new reduxForm({
    form: 'porposalform'
})(ProposalForm);

export const mapStateToProps = state => ({
    fullState: state,
    selectedFinHouse: state.financeHouse.selectedForQuote,
    // selectedQuote: (state.quote.SelectedProduct = "HP" ? state.quote.HPQuoteResults :
    // state.quote.PCPQuoteResults),
    selectedQuote: state.quote.SelectedProduct
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
    toProposal: (proposalReqObject) => {

        console.log(JSON.stringify(proposalReqObject));

        dispatch(SaveProposalReqObj(proposalReqObject));
        dispatch(generateProposal(proposalReqObject));

        ownProps.history.push(Navigate.TO_PROPOSAL_DECISION);
    },
    getProposalDetails: (customerState) => {

    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalPageContainer);