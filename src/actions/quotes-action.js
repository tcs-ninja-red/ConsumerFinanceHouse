/*
export const GET_MAKE = "GET_MAKE";
export const SEARCH_DEALERS = "SEARCH_DEALERS";
*/
export const GET_QUOTE = "GET_QUOTE";
export const GET_PCP_QUOTE = "GET_PCP_QUOTE";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const FAIL_HPQUOTE = "FAIL_HPQUOTE";
export const FAIL_PCPQUOTE = "FAIL_PCPQUOTE";

const API_URL = process.env.REACT_APP_QUOTE_SERVICE_URL; //"https://consumerfinancequoteapi-4thjzexd2a-uc.a.run.app";
console.log(`API URL : ${API_URL}`);

/*
export const getMake = (json) => ({
    type: GET_MAKE,
    json: json,
});
export const searchResults = (json) => ({
    type: SEARCH_DEALERS,
    json: json,
});
*/

export const getQuotes = (json) => ({
    type: GET_QUOTE,
    json: json,
});

export const getPCPQuotes = (json) => ({
    type: GET_PCP_QUOTE,
    json: json,
});

export const FailHPQuote = (json) => ({
    type: FAIL_HPQUOTE,
    json: json,
});

export const FailPCPQuote = (json) => ({
    type: FAIL_PCPQUOTE,
    json: json,
});

export const Saveselectedproduct = (string) => ({
    type: SELECTED_PRODUCT,
    string: string,
});


export function Saveproduct(productname) {
    return function (dispatch) {
        dispatch(Saveselectedproduct(productname));
    }
}


///Search dealer by postcode
/*
export function searchDealer(postcode) {
    return function (dispatch) {
        //dispatch(requestPosts());
        console.log("postcode", postcode);
        return fetch(`http://localhost:44301/api/v1/dealers?postcode=${postcode}`)
            .then(
                (response) => response.json(),
                (error) => console.log("An error occurred.", error)
            )
            .then((json) => {
                //console.log("response1", json);
                dispatch(searchResults(json));
            });
    };
}

///Get Vehicle Make
export function getVehicleMakes() {
    return function (dispatch) {
        return fetch(`http://localhost:44301/api/v1/vehicles/makes`)
            .then(
                (response) => response.json(),
                (error) => console.log("An error occurred.", error)
            )
            .then((json) => {
                //console.log("responseMakes", json);
                dispatch(getMake(json));
            });
    };
}
*/

///Get Vehicle Quote
export function getVehicleQuotes(financial, max_annual_mileage, vehicle, dealer_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/api/v1/quotes`, {
            // return fetch(`http://localhost:44301/api/v1/quotes`, {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "x-rapidapi-key": "apikey",
                "content-type": "application/json",
                "accept": "application/json"
            },
            /*    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST', */
            "body": JSON.stringify({
                financial,
                max_annual_mileage,
                vehicle,
                dealer_id
                /*"financial": {
                    "product": "HP",
                    "cash_price": 20000,
                    "deposit_amount": 2000,
                    "term": 36
                },
                "max_annual_mileage": 6000,
                "vehicle": {
                    "vehicle_mileage": 5000,
                    "registration_month": 1,
                    "registration_year": 2020,
                    "make": "Ford",
                    "model": "Focus",
                    "description": "2019 model",
                    "model_year": 2019,
                    "vehicle_code": "vh01"
                },
                "dealer_id": "50010001" */
            }),

        })
            .then(
                (response) => response.json(),
                (error) => console.log("An error occurred.", error)
            )
            .then((json) => {
                console.log("responseModel", json);
                if (json.status_code === 422) {
                    console.log('fail422', json);
                    dispatch(FailHPQuote(json));
                } else {
                    console.log('HP Quote Success', json);
                    dispatch(getQuotes(json));
                }

            });
    };
}



///Get Vehicle Quote
export function getPCPVehicleQuotes(financial, max_annual_mileage, vehicle, dealer_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/api/v1/quotes`, {
            // return fetch(`http://localhost:44301/api/v1/quotes`, {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "x-rapidapi-key": "apikey",
                "content-type": "application/json",
                "accept": "application/json"
            },
            /*    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST', */
            "body": JSON.stringify({
                financial,
                max_annual_mileage,
                vehicle,
                dealer_id
                /*"financial": {
                    "product": "HP",
                    "cash_price": 20000,
                    "deposit_amount": 2000,
                    "term": 36
                },
                "max_annual_mileage": 6000,
                "vehicle": {
                    "vehicle_mileage": 5000,
                    "registration_month": 1,
                    "registration_year": 2020,
                    "make": "Ford",
                    "model": "Focus",
                    "description": "2019 model",
                    "model_year": 2019,
                    "vehicle_code": "vh01"
                },
                "dealer_id": "50010001" */
            }),

        })
            .then(
                (response) => response.json(),
                (error) => console.log("An error occurred.", error)
            )
            .then((json) => {
                console.log("responseModel", json);
                if (json.status_code === 422) {
                    console.log('fail422', json);
                    dispatch(FailPCPQuote(json));
                } else {
                    console.log('PCP Quote Success', json);
                    dispatch(getPCPQuotes(json));
                }

            });
    };
}