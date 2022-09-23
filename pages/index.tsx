import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Twitter clone</title>
        
      </Head>

      <main className='grid grid-cols-9'>
        {/*sidebar */}
        <Sidebar/>
        {/* feed */}
        <Feed/>
        {/*widgets */}
        <Widgets/>
        
      </main>
    </div>
  )
}

export default Home
