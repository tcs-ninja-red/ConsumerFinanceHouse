import {
  GET_QUOTE,
} from "../actions/quotes-action";
const initialState = {
  QuoteResults: "",
  makeList: "",
  modelList: "",
  descriptionList: "",
};

/*
const initialState = {
    quote: 'testQuote',
    counter: 0,
    loggedIn: true,
  };
*/

const quote = (state = initialState, action) => {
  console.log("action.type", action.type);
  switch (action.type) {

    case GET_QUOTE:
      return {
        ...state,
        QuoteResults: action.json,
          loading: false,
      };

    default:
      return state;
  }
};


export default quote;