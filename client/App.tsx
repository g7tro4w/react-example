import React, { FC } from "react";
import { Default as DefaultLayout } from "./layouts";
import { Routes } from './Routes'
import './App.css'

const App: FC = () => {
    return <DefaultLayout>
        <Routes/>
    </DefaultLayout>
}

export default App