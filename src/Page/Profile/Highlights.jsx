import React from 'react'

const Highlights = ({savedTweets }) => {
  return (
    <div>
       <div>
            <h1>Profile</h1>
            <h2>Highlights</h2>
            <div>
                {savedTweets.map(tweet => (
                    <div key={tweet.id}>
                        <p>{tweet.tweet}</p>
                        {/* Render other tweet details as needed */}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Highlights
