import { Request, Response } from 'express'
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import fs from 'fs';
import path from 'path';

import App from '../../client/App'

export const defaultView = (req: Request, res: Response) => {
    const manifest = fs.readFileSync(
        path.join(__dirname, 'client/manifest.json'),
        'utf-8'
    )
    const assets = JSON.parse(manifest)
    const component = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );
    res.render('index', { assets, component })
}