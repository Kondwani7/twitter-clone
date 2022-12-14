import React from 'react'
import {RiHome7Fill} from 'react-icons/ri'
import {BsHash, BsBookmark, BsListTask} from 'react-icons/bs'
import {BiEnvelope, BiUserPlus} from 'react-icons/bi'
import {VscBellDot} from 'react-icons/vsc'
import {AiOutlineUser} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Image from 'next/image'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className=' col-span-2 flex flex-col item-center px-4 md:items-start'>
      <div className='mt-2 -right-4'  style={{width: '30px', height: '30px', position: 'relative'}}>
        <Image src='/img/twitter.png' width={10} height={10} layout='fill' alt="logo"/>
      </div>
      
        <SidebarRow Icon={RiHome7Fill} title='Home'/>
        <SidebarRow Icon={BsHash} title='Explore'/>
        <SidebarRow Icon={VscBellDot} title='Notifications'/>
        <SidebarRow Icon={BiEnvelope} title='Messages'/>
        <SidebarRow Icon={BsBookmark} title='Bookmarks'/>
        <SidebarRow Icon={BsListTask} title='Lists'/>
        <SidebarRow Icon={AiOutlineUser} title='Profile'/>
        <SidebarRow Icon={FiMoreHorizontal} title='More'/>
        <button 
          className='bg-twitter hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            Tweet
          </button>
        <SidebarRow Icon={BiUserPlus} title='Sign In'/>
    </div>
  )
}

export default Sidebar
