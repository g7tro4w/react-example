import { Request, Response } from 'express'
import { Views } from './views/views'

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
        path: '/',
    },
    {
        path: '/about',
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