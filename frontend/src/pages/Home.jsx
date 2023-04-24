import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Progress from '../components/Progress'

function Home() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Progress percent={50} />
    </div>
  )
}

export default Home
