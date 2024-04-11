import React, { useState } from 'react';

const ShowComments = ({ tweetComments }) => {
  const [showAllComments, setShowAllComments] = useState(false);

  const handleToggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <div>
      <button onClick={handleToggleComments}>
        {showAllComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showAllComments && tweetComments && tweetComments.length > 0 && (
        <div>
          <h2>Submitted Comments:</h2>
          {tweetComments.map((comments, tweetIndex) => (
            <div key={tweetIndex}>
              <h3>Comments for Tweet {tweetIndex + 1}:</h3>
              <ul>
                {comments.map((comment, commentIndex) => (
                  <li key={commentIndex}>
                    <p>{comment.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowComments;
