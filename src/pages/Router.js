import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from './Home'
import About from './About'
import Service from './Service'
import Blog from './Blog'
import Contact from './Contact'
import Help from './Help'
import Crud1 from './Crud1'
import Crud2 from './Crud2'
import Crud2View from './Crud2View'
import Login from './Login'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/About' element={<About/>}/>
                        <Route path='/Service' element={<Service />}/>
                        <Route path='/Blog' element={<Blog />}/>
                        <Route path='/Contact' element={<Contact />}/>
                        <Route path='/Help' element={<Help />}/>
                        <Route path='/Crud1' element={<Crud1 />}/>
                        <Route path='/Crud2' element={<Crud2 />}/>
                        <Route path='/Crud2View' element={<Crud2View />}/>
                        <Route path='/Login' element={<Login />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
