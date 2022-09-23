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
    <div>
      <Image src='/img/twitter.png' width={30} height={30} alt="logo"/>
        <SidebarRow Icon={RiHome7Fill} title='Home'/>
        <SidebarRow Icon={BsHash} title='Explore'/>
        <SidebarRow Icon={VscBellDot} title='Notifications'/>
        <SidebarRow Icon={BiEnvelope} title='Messages'/>
        <SidebarRow Icon={BsBookmark} title='Bookmarks'/>
        <SidebarRow Icon={BsListTask} title='Lists'/>
        <SidebarRow Icon={AiOutlineUser} title='Profile'/>
        <SidebarRow Icon={FiMoreHorizontal} title='More'/>
        <SidebarRow Icon={BiUserPlus} title='Sign In'/>
    </div>
  )
}

export default Sidebar
