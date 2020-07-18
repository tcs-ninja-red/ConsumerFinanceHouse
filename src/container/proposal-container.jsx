import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ProposalForm from '../component/form/proposal-form';
import * as Navigate from '../constants/routes-constant';


const ProposalPageContainer = new reduxForm({
    form: 'porposalform'
})(ProposalForm);

export const mapStateToProps = state => ({
    fullState: state,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalPageContainer);