// import { TOGGLE_BOOKMARK } from "./action";

// const initialState = {
//   bookmarkedTweets: [],
// };

// const toggleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_BOOKMARK:
//       const tweetId = action.payload;
//       const isBookmarked = state.bookmarkedTweets?.includes(tweetId);
//       if (isBookmarked) {
//         return {
//           ...state,
//           bookmarkedTweets: state.bookmarkedTweets.filter(
//             (id) => id !== tweetId
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           bookmarkedTweets: [...state.bookmarkedTweets, tweetId],
//         };
//       }
//     default:
//       return state;
//   }
// };

// export default toggleReducer;

// const initialState = {
//   isBookmarked: false,
// };

// const toggleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_BOOKMARK:
//       return {
//         ...state,
//         isBookmarked: !state.isBookmarked,
//       };
//     default:
//       return state;
//   }
// };

// export default toggleReducer;
