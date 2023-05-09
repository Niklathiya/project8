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
    const data ={
        work: "giving job to unemployed starkid",
        hobby: "play gta in real life , hunting , teach physics",
        address: "mil footpath pe",
        fav_line: "mil mujhe kahi bahar"
    }

    const adata={
        about: "mere bare mein itna mat sochna court mein aata hoon, jail mein nahi"
    }
    const sdata={
        service: "i don't know who you are but i'll find you & remake your film"
    }
    const bdata={
        blog: "salman khan is the iphone of bollywood. same acting in every movie, high market value, no improvements and blind fan following"
    }
    const cdata={
        contact: "mere bare mein itna mat sochna dil mein aata hoon, dimag mein nahi , mail us for physics class"
    }
    const hdata={
        help: "when salman khan need help:- thik hai bhai ab mein chalta hun"
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<Home data={data}/>}/>
                        <Route path='/About' element={<About adata={adata}/>}/>
                        <Route path='/Service' element={<Service sdata={sdata}/>}/>
                        <Route path='/Blog' element={<Blog bdata={bdata} />}/>
                        <Route path='/Contact' element={<Contact cdata={cdata}/>}/>
                        <Route path='/Help' element={<Help hdata={hdata} />}/>
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
