import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import Avatar from 'react-avatar';
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import './Feed.css';
import { addTweet } from '../redux/action';

const CreatePost = () => {
    const tweets = useSelector((state) => state.tweets)
    console.log(tweets)
    const dispatch = useDispatch()

    const [tweet, setTweet] = useState('')

    const saveTweet = () => {
        const tweetPayload = {
            id: 1,
            tweet: tweet
        };
        dispatch(addTweet(tweetPayload))
    }

    return (
        <div className='w-[100%]'>
            <div className='mt-2'>
                <div className=' info postmain flex items-center justify-between border-b border-gray-200'>
                    <div className='cursor-pointer hover:bg-gray-400 w-full text-center p-4'>
                        <span>for you</span>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-400 w-full text-center p-4'>
                        <span>following</span>
                    </div>
                </div>

                <div>
                    <div className='flex items-center p-4'>
                        <div >
                            <Avatar src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg" size="40" round={true} />
                        </div>
                        <input className='w-full outline-none border-none text-lg ml-3' type="text" placeholder='What is happing ?!' onChange={(e) => setTweet(e.target.value)} />
                    </div>
                    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div className='flex justify-stretch my-1 icons'>
                            <a href="a"><FaImage /></a>
                            <a href="a"><MdOutlineGifBox /></a>
                            <a href="a"><BiPoll /></a>
                            <a href="a"><FiSmile /></a>
                            <a href="a"><GrSchedulePlay /></a>
                            <a href="a"><FaLocationDot /></a>
                        </div>
                        <button className='bg-[#1D9Df0] text-lg text-white items-center px-4 py-1 border-none rounded-full' onClick={saveTweet}>post</button>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex'>
                    <div >
                        <Avatar src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg" size="40" round={true} />
                    </div>
                    <div className='flex ml-4'>     
                        <h2>Harsa Dash</h2>
                        <p className='text-gray-400 text-sm'>@Harsa_Dash .1m</p>
                    </div>


                </div>
                <div className=''>
                    <p className='text-gray-400 text-sm'>I’m quitting YouTube</p>
                </div>
                <div>
                    <input type="text" placeholder='tweet' />
                </div>
            </div>
        </div>
    )

}

export default CreatePost
