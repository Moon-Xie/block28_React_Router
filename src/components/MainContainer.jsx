import React from "react";
import { Routes, Route, Link} from 'react-router-dom'
import Blue from "./Blue";
import Red from './Red'
import Green from './Green'
import Black from './Black'
import Orange from './Orange'
import Home from './Home'

export default function mainContainer() {
    return (
        <>
            <Routes>
              <Route path='/blue' element={<Blue />}></Route>
              <Route path='/red' element={<Red />}></Route>
              <Route path='/green' element={<Green />}></Route>
              <Route path='/black' element={<Black />}></Route>
              <Route path='/orange' element={<Orange />}></Route>
              <Route path='/' element={<Home />}></Route>
            </Routes>
        </>

    )
}