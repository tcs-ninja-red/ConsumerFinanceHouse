import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import financeHouse from './finance-house-reducer';
import quote from './quote-reducer'
import proposal from './proposal-reducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  financeHouse,
  quote,
  proposal,
});

export default rootReducer;
