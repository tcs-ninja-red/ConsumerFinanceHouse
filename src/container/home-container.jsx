import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import HomePageForm from '../component/form/home-form';
import * as Navigate from '../constants/routes-constant';


const HomePageContainer = new reduxForm({
  form: 'homepageform'
})(HomePageForm);

export const mapStateToProps = state => ({
  fullState: state,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuote: () => {
    ownProps.history.push(Navigate.TO_QUOTES);
  },
  onFinanceHouse: () => {
    //console.log(ownProps);
    ownProps.history.push(Navigate.TO_FINHOUSE);
  },
  onHome: () => {
    ownProps.history.push(Navigate.TO_HOME);
  },
  onDealerForm: () => {
    ownProps.history.push(Navigate.TO_DEALER);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePageContainer);