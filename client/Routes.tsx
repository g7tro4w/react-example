import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import paths from '../config/paths.json'

import { Home, About, Basket, Delivery, Product, Promo } from './pages'

export const Routes: FC = () => {
    return useRoutes([
        {
            path: paths.home,
            element: <Home/>,
        },
        {
            path: paths.about,
            element: <About/>,
        },
        {
            path: paths.basket,
            element: <Basket/>,
        },
        {
            path: paths.delivery,
            element: <Delivery/>,
        },
        {
            path: paths.product,
            element: <Product/>,
        },
        {
            path: paths.promo,
            element: <Promo/>,
        },
    ])
}