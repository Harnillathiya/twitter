import React from 'react'
import { FaImage } from "react-icons/fa";
import Avatar from 'react-avatar';
import './Feed.css';

const CreatePost = () => {
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

                <div className='m-4'>
                    <div className='flex items-center'>
                        <div >
                        <Avatar src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg" size="40" round={true} />
                        </div>
                        <input className='w-full outline-none border-none text-lg ml-3' type="text" placeholder='What is happing ?!'/>
                    </div>
                    <div>
                        <div>
                            <FaImage/>
                        </div>
                        <button className='bg-[#1D9Df0] text-lg text-white text-right px-4 py-1 border-none rounded-full'>post</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CreatePost
