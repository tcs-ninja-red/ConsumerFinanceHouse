import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions/fin-house-actions";
const initialState = {
  //postCode: "",
  dealerSearchResults: "",
};

const financeHouse = (state = initialState, action) => {
  console.log("action.type", action.type);
  switch (action.type) {
    // case "SEARCH_DEALER":
    //   console.log("state", state);
    //   return action.payload + "HII";
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case RECEIVE_POSTS:
      //console.log("action.json", action.json);
      return {
        ...state,
        dealerSearchResults: action.json,
        loading: false,
      };
    default:
      return state;
  }
};

export default financeHouse;
