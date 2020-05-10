import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Navigate from '../constants/routes-constant';

export class FinanceHouseContainer extends Component {


render() {
  const { onQuote, onForm } = this.props;
  return (
    <React.Fragment>
      <div>
        Home Page
          <button onClick={onQuote}>Go To Quotes</button>
          <button onClick={onForm}>Go To Finance House</button>
      </div>
    </React.Fragment>

  );
}
}

FinanceHouseContainer.propTypes = {
};

FinanceHouseContainer.defaultProps = {
};

export const mapStateToProps = state => ({
  fullState: state,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuote: () => {
    ownProps.history.push(Navigate.TO_QUOTES);
  },
  onForm: () => {
    ownProps.history.push(Navigate.TO_FORM);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinanceHouseContainer);
