import { Request, Response } from 'express'
import { Views } from './views/views'

import paths from '../config/paths.json'

import * as ViewsLibrary from './views'

interface IRoute {
    path: string;
    middlewares?: (() => void)[];
    controller?: (req: Request, res: Response) => void;
    view?: Views
}
// TODO вынести в отдельный файл
export const rawRoutes: IRoute[] = [
    {
        path: paths.home,
    },
    {
        path: paths.about,
    },
    {
        path: paths.basket,
    },
    {
        path: paths.delivery,
    },
    {
        path: paths.promo,
    },
    {
        path: paths.product,
    }
]

export const routes = rawRoutes.map(({
    path, middlewares, controller, view
}) => ({
    path,
    middlewares,
    controller,
    renderView: (req: Request, res: Response) => {
        const currentView = view || Views.Default

        return ViewsLibrary[currentView](req, res)
    }
}))