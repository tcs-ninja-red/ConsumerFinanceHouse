import React, { Component } from 'react';


export class SampleField extends Component {

  render() {
    const fieldProps = this.props;
    return (
      <React.Fragment>
        <div>
          <input
            {...fieldProps.input}
            type="text"
            name={fieldProps.name}
            id={fieldProps.id}
            label={fieldProps.label}
            title={fieldProps.label}
          />
        </div>
      </React.Fragment>

    );
  }
}

SampleField.propTypes = {
};

SampleField.defaultProps = {
};
