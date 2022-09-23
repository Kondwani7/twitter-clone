import Image from 'next/image'
import React, { useState } from 'react'
import {MdOutlineImage} from 'react-icons/md'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarStats} from 'react-icons/tb'
import {IoLocationOutline} from 'react-icons/io5'

function TweetBox() {
  //control the state of a user tweet
  const [input, setInput] = useState<string>('')
  return (
    <div className='flex space-x-2 p-5'>
      <div className='h-14 w-14 mt-4 relative'>
        <Image layout='fill' objectFit='cover' src='/img/user.png' alt='user'/>
      </div>
      <div className='flex flex-1 items-center pl-2'>
        <form className='flex flex-1 flex-col'>
          <input
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            type='text' 
            placeholder="What's happening"
            className='h-24 w-full text-xl outline-none placeholder:text-xl'
          />
          <div className='flex items-center'>
            <div className='flex flex-1 space-x-4 text-twitter'>
              <MdOutlineImage 
                className='h-5 w-5 cursor-pointer transition-transform duration-200
                  ease-out hover:scale-150'/>
              <AiOutlineFileGif 
                className='h-5 w-5 cursor-pointer transition-all duration-200
                  hover:bg-gray-100 rounded-full'/>
              <BiPoll className='h-5 w-5 cursor-pointer transition-all duration-200
                  hover:bg-gray-100 rounded-full'/>
              <BsEmojiSmile className='h-5 w-5 cursor-pointer transition-all duration-200
                  hover:bg-gray-100 rounded-full'/>
              <TbCalendarStats className='h-5 w-5 cursor-pointer transition-all duration-200
                  hover:bg-gray-100 rounded-full'/>
              <IoLocationOutline className='h-5 w-5 opacity-60'/>
            </div>
            <button 
              disabled={!input}
              className='rounded-full bg-twitter px-5 py-2 font-bold text-white
                disabled:opacity-40'>
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
