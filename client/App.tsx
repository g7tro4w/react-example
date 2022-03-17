import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Default as DefaultLayout } from "./layouts";

import './App.css'

const App: FC = () => {
    return <DefaultLayout>
        <Routes>
            <Route path="/" element={<div>Home</div>} />
        </Routes>
    </DefaultLayout>
}

export default App