import express, { Request, Response } from 'express'
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server'

import App from '../client/App'

const PORT = 4000;

const serverInstance = express();

serverInstance.set('view engine', 'ejs')
serverInstance.set('views', path.join(__dirname, '../templates'))

serverInstance.use('/', express.static(path.join(__dirname, 'client')))

const manifest = fs.readFileSync(
    path.join(__dirname, 'client/manifest.json'),
    'utf-8'
  )
  const assets = JSON.parse(manifest)

  serverInstance.get('/', (req: Request, res: Response) => {
    const component = ReactDOMServer.renderToString(React.createElement(App))
    res.render('index', { assets, component })
  })

serverInstance.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})