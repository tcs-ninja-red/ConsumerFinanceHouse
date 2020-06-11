import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { SampleForm } from "../component/sample-form";
import {
  searchDealer,
  getVehicleMakes,
  getVehicleModels,
  getVehicleDescriptions,
} from "../actions/fin-house-actions";
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
  financeHouseState: state.financeHouse,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  searchDealer: (postcd) => {
    //console.log("postcd", postcd);
    dispatch(searchDealer(postcd));
  },
  getVehicleMakes: () => {
    dispatch(getVehicleMakes());
  },
  getVehicleModels: (make) => {
    dispatch(getVehicleModels(make));
  },
  getVehicleDescriptions: (make, model) => {
    console.log("makemodel", model);
    dispatch(getVehicleDescriptions(make, model));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
