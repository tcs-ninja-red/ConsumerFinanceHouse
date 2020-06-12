import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { SampleForm } from "../component/sample-form";
import {
  searchDealer,
  getVehicleMakes,
  getVehicleModels,
  getVehicleDetails,
  getVehicleDescriptions,
} from "../actions/fin-house-actions";
const FormContainer = new reduxForm({
  form: "sampleForm",
})(SampleForm);

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
  getVehicleDetails: (make, model, description) => {
    console.log("makes cont", make + model + description);
    dispatch(getVehicleDetails(make, model, description));
  },
  getVehicleDescriptions: (make, model) => {
    dispatch(getVehicleDescriptions(make, model));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
