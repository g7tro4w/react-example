import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Default as DefaultLayout } from "./layouts";

import './App.css'

const App: FC = () => {
    return <DefaultLayout>
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/basket" element={<div>Basket</div>} />
            <Route path="/product" element={<div>Product</div>} />
            <Route path="/delivery" element={<div>Delivery</div>} />
            <Route path="/promo" element={<div>Promo</div>} />
            <Route path="/about" element={<div>About</div>} />
        </Routes>
    </DefaultLayout>
}

export default App