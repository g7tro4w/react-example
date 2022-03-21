import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import paths from '../config/paths.json'

import { Home, About, Basket, Delivery, Product, Promo } from './pages'

interface IRouteConfig {
    path: string;
    component: JSX.Element;
}

const config: IRouteConfig[] = [
    {
        path: paths.home,
        component: <Home/>,
    },
    {
        path: paths.about,
        component: <About/>,
    },
    {
        path: paths.basket,
        component: <Basket/>,
    },
    {
        path: paths.delivery,
        component: <Delivery/>,
    },
    {
        path: paths.product,
        component: <Product/>,
    },
    {
        path: paths.promo,
        component: <Promo/>,
    },
]


export const routes: FC = () => {
    return <Routes>
        {config.map(el => <Route path={el.path} element={el.component} />)}
    </Routes>
}