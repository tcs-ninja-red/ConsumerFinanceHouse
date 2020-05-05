import React, { Component } from 'react';
import { connect } from 'react-redux';

export class QuotesContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          Quote Page
        </div>
      </React.Fragment>

    );
  }
}

QuotesContainer.propTypes = {
};

QuotesContainer.defaultProps = {
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuotesContainer);
