import React from 'react'
import { SlLike } from "react-icons/sl";



const TweetItem = ({ tweet, index }) => {
    
    

    return (
        <div className="flex justify-between p-3" key={index}>
            <div className="flex items-center">
                <button >
                    <SlLike size={"24px"} />
                </button>
            </div>
            
            

        </div>
    );
};

export default TweetItem;
