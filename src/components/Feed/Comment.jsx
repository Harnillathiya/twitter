// import React, { useState } from 'react';
// import TweetItem from './TweetItem';

// const Comment = () => {
//   const [comments, setComments] = useState([]);

//   // Function to add a new comment
//   const addComment = (tweetId, commentText) => {
//     // Add the new comment to the existing comments array
//     setComments([...comments, { tweetId, comment: commentText }]);
//   };

//   return (
//     <div>
//       {/* Render the TweetItem component with the addComment function */}
//       <TweetItem setCommentText={addComment} />
//       <div>
//         <h2>Submitted Comments:</h2>
//         <ul>
//           {/* Map over the comments array and render each comment */}
//           {comments.map((comment, index) => (   
//             <li key={index}>
//               {/* Render the comment text */}
//               <p>{comment.comment}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Comment;
