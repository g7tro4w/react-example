import express, { Request, Response } from 'express'
import path from 'path';

import paths from '../config/paths.json'

import { routes } from './routes'

import { NotFound } from './views'

const VALID_URLS = Object.values(paths)

const PORT = 4000;

const serverInstance = express();

serverInstance.set('view engine', 'ejs')
serverInstance.set('views', path.join(__dirname, '../templates'))

serverInstance.use('/', express.static(path.join(__dirname, 'client')))

serverInstance.use((req, res, next) => {
  if (req.accepts('html')) {
    if (VALID_URLS.includes(req.url)) {
      return next();
    }
    res.status(404);
    NotFound(req, res);
    return;
  }
})


routes.forEach(route => {
  serverInstance.get(route.path, (req: Request, res: Response) => {
    // TODO Вот тут запилить обход миидварей, которые могут быть асинхронными
    route.controller?.(req, res)
    route.renderView(req, res)
  })
})

serverInstance.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})