import React from 'react'
import Avatar from 'react-avatar';
import

const CreatePost = () => {
    return (
        <div>
            <div className='m-3'> 
                <div className='postmain flex items-center justify-between'>
                    <div>
                        <span>for you</span>
                    </div>
                    <div>
                        <span>following</span>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                        <Avatar src="" size="100" round={true} />
                        </div>
                        <input type="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
