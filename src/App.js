import React from 'react';
import './index.css';
import Nav from './Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import Learnstate from './Learnstate';


function App() {
    return(
        <div>
            <BrowserRouter>
                <Nav />
                <Learnstate />
                
            
            </BrowserRouter>
            
        </div>
    )
}

export default App