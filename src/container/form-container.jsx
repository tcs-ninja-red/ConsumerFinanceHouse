import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { SampleForm } from "../component/sample-form";
import { searchDealer } from "../actions/fin-house-actions";
const FormContainer = new reduxForm({
  form: "sampleForm",
})(SampleForm);

// FormContainer.propTypes = {
// };

// FormContainer.defaultProps = {
// };

// export const mapStateToProps = state => ({
// });

// export const mapDispatchToProps = (dispatch, ownProps) => ({
// });

FormContainer.defaultProps = {};
export const mapStateToProps = (state) => ({
  searchResults: state.financeHouse,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  searchDealer: (postcd) => {
    //console.log("postcd", postcd);
    dispatch(searchDealer(postcd));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
