import express, { Request, Response } from 'express'
import path from 'path';

import { routes } from './routes'

const PORT = 4000;

const serverInstance = express();

serverInstance.set('view engine', 'ejs')
serverInstance.set('views', path.join(__dirname, '../templates'))

serverInstance.use('/', express.static(path.join(__dirname, 'client')))

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