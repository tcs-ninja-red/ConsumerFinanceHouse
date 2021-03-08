import {
    SUCCESS_PROPOSAL, FAIL_PROPOSAL, PROPOSAL_REQ_OBJ,
} from "../actions/proposal-actions";

const initialState = {
    proposalSuccess: "",
    proposalFail: "",
    proposalStatus: "",
    proposalReqObj: "",
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
        case PROPOSAL_REQ_OBJ:
            return {
                ...state,
                proposalReqObj: action.json,
            };
        default:
            return {
                ...state,
                proposalStatus: "Something wrong",
            };
    }
};

export default proposal;
