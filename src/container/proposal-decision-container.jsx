import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ProposalDecisionForm } from '../component/form/proposal-decision-form';
//import * as Navigate from '../constants/routes-constant';

const ProposalDecisionPageContainer = new reduxForm({
    form: 'porposaldecisionform'
})(ProposalDecisionForm);

//ProposalDecisionPageContainer.defaultProps = {};

export const mapStateToProps = state => ({
    proposalSuccess: state.proposal.proposalSuccess,
    proposalFail: state.proposal.proposalFail,
    proposalStatus: state.proposalStatus,
    selectedFinHouse: state.financeHouse.selectedForQuote,
    // selectedQuote: (state.quote.SelectedProduct = "HP" ? state.quote.HPQuoteResults :
    //     state.quote.PCPQuoteResults),
    selectedQuote: state.quote.SelectedProduct,
    selectedProposal: state.proposal.proposalReqObj,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalDecisionPageContainer);