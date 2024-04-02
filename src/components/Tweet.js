import React from 'react'
import Avatar from 'react-avatar';


const Tweet = () => {
    return (
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
        </div>
    )
}

export default Tweet
