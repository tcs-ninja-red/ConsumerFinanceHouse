// export const searchDealer = (postcode) => ({
//   type: "SEARCH_DEALER",
//   payload: postcode,
// });

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});
export const receivedPosts = (json) => ({
  type: RECEIVE_POSTS,
  json: json,
});

///Search postcode throught external API
export function searchDealer(postcode) {
  return function (dispatch) {
    //dispatch(requestPosts());
    console.log("postcode", postcode);
    return fetch(`https://api.postcodes.io/postcodes/${postcode}/nearest`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log("response1", json);
        dispatch(receivedPosts(json));
      });
  };
}
