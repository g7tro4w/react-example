import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import App from './App'

const appElement = document.getElementById('app')

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    appElement
)