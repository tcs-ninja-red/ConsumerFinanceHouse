import {
    SUCCESS_PROPOSAL, FAIL_PROPOSAL
} from "../actions/proposal-actions";

const initialState = {
    proposalSuccess: "",
    proposalFail: "",
};

const proposal = (state = initialState, action) => {
    console.log("action.type", action.type);
    switch (action.type) {
        case SUCCESS_PROPOSAL:
            return {
                ...state,
                proposalSuccess: action.json,
            };
        case FAIL_PROPOSAL:
            return {
                ...state,
                proposalFail: action.json,
            };
        default:
            return state;
    }
};

export default proposal;
