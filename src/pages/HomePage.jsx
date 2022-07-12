import React from 'react'
import Get from '../components/Get'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Post from '../components/Post'

const HomePage = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <main className='main'>
            <Intro/>
            <Get/>
            <Post/>
        </main>
    </div>
  )
}

export default HomePage