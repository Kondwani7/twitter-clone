import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='px-2'>
      {/*search bar */}
      <div className='mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3'>
        <FiSearch className='h-5 w-5'/>
        <input
            type='text'
            placeholder='Search Twitter'
            className='flex-1 bg-transparent outline-none'
        />
      </div>

       <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kondwani_g"
            options={{height: 400}}
        />
      
    </div>
  )
}

export default Widgets
