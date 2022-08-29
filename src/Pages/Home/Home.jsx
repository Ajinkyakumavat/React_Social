import React from 'react';
import './Home.css';
import Topbar from '../../Component/topbar/Topbar';
import Sidebar from '../../Component/sidebar/Sidebar';
import Feed from '../../Component/feed/Feed';
import Rightbar from '../../Component/rightbar/Rightbar';

const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
      
    </>
  )
}

export default Home