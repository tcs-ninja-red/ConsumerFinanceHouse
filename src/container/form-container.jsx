import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { SampleForm } from '../component/sample-form';

const FormContainer = new reduxForm({
  form: 'sampleForm'
})(SampleForm);

FormContainer.propTypes = {
};

FormContainer.defaultProps = {
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContainer);