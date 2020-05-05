import React, { Component } from 'react';
import { Field } from 'redux-form';
import { SampleField } from './sample-field';


export class SampleForm extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          Form page
          <Field
            component={SampleField}
            id="sampleField"
            name="sampleField"
            label="Sample Field"
          />
        </div>
      </React.Fragment>

    );
  }
}

SampleForm.propTypes = {
};

SampleForm.defaultProps = {
};
