import React, { Component } from 'react';
import { connect } from 'react-redux';

export class QuotesContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="quotes-container">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="subtitle is-3">
                  <strong>Vehicle Financial Service Quote</strong>
                </p>
              </div>
            </div>
          </div>
          <hr className="heading-divider" />
          <div class="columns is-gapless">
            <div class="column">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <div className="is-size-3">Hire Purchase</div>
                </div>
              </div>
              <br />
              <div className="data-container ">
                <div className="columns">
                  <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="columns">
                      <div className="column">
                        60 monthly payments of
                      </div>
                      <div className="column">
                        £101.37
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Term of agreement
                      </div>
                      <div className="column">
                        60 months
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        First payment
                      </div>
                      <div className="column">
                        £101.37
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Final payment
                      </div>
                      <div className="column">
                        £101.37
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Cash price
                      </div>
                      <div className="column">
                        £6,989.00
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Your deposit
                      </div>
                      <div className="column">
                        £1,000.00
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Total Deposit
                      </div>
                      <div className="column">
                        £1,000.00
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Amount of credit
                      </div>
                      <div className="column">
                        £5,989.00
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Total charge for credit
                      </div>
                      <div className="column">
                        £1,952.57
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Fixed rate of interest
                      </div>
                      <div className="column">
                        9.90%
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        A.P.R
                      </div>
                      <div className="column">
                        9.9% A.P.R
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        Total amount payable
                      </div>
                      <div className="column">
                        £8,941.57
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className="columns is-mobile">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <button className="button is-primary is-medium is-fullwidth">Apply for hire purchase</button>
                </div>
              </div>
            </div>
            <span className="vertical-divider has-text-justified" />
            <div class="column">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <div className="is-size-3">Personal Contract Purchase</div>
                </div>
              </div>
              <div className="column is-three-fifths is-offset-one-fifth">
                <div className="columns">
                  <div className="column">
                    60 monthly payments of
                      </div>
                  <div className="column">
                    £101.37
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Term of agreement
                      </div>
                  <div className="column">
                    60 months
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    First payment
                      </div>
                  <div className="column">
                    £101.37
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Optional final payment
                      </div>
                  <div className="column">
                    £1,960.37
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Cash price
                      </div>
                  <div className="column">
                    £6,989.00
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Your deposit
                      </div>
                  <div className="column">
                    £1,000.00
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Total Deposit
                      </div>
                  <div className="column">
                    £1,000.00
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Amount of credit
                      </div>
                  <div className="column">
                    £5,989.00
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Total charge for credit
                      </div>
                  <div className="column">
                    £1,952.57
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Annual milage
                      </div>
                  <div className="column">
                    10,000
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Excess milage
                  </div>
                  <div className="column">
                    1.68 ppm
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Fixed rate of interest
                      </div>
                  <div className="column">
                    9.90%
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    A.P.R
                      </div>
                  <div className="column">
                    9.9% A.P.R
                      </div>
                </div>
                <div className="columns">
                  <div className="column">
                    Total amount payable
                      </div>
                  <div className="column">
                    £8,941.57
                      </div>
                </div>
              </div>
              <br/>
              <div className="columns is-mobile">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <button className="button is-primary is-medium is-fullwidth">Apply for personal contract purchase</button>
                </div>
              </div>
            </div>
          </div>
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
