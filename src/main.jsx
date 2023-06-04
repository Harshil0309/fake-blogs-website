import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import VideoList from './VideList.jsx'
import VideoPage from './VideoPage.jsx'
import {BrowserRouter , Route, Router , Routes} from 'react-router-dom'
import Navbar from './Navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<VideoList/>}/>
      <Route path="/:videoId" element={<VideoPage/>}/>
    </Routes>
  </BrowserRouter>
)
