import { Request, Response } from 'express'
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import fs from 'fs';
import path from 'path';

import NotFound from '../../client/NotFound'

export const notFound = (req: Request, res: Response) => {
    // const context = {}
    const manifest = fs.readFileSync(
        path.join(__dirname, 'client/manifest.json'),
        'utf-8'
    )
    const assets = JSON.parse(manifest)
    const component = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <NotFound />
        </StaticRouter>
    );
    res.render('index', { assets, component })
}