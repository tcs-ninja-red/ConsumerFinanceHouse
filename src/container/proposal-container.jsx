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
    toProposal: (input) => {
        dispatch(generateProposal(input));
        ownProps.history.push(Navigate.TO_PROPOSAL_DECISION);
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalPageContainer);