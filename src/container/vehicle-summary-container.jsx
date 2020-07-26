import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { VehicleSummaryForm } from '../component/form/vehicle-summary-form';

const VehicleSummaryContainer = new reduxForm({
    form: 'vehiclesummaryform'
})(VehicleSummaryForm);

export const mapStateToProps = state => ({
    finhouseState: state,
    // financehouse: state.financehouse.vehicleDetails,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VehicleSummaryContainer);