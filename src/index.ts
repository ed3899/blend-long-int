import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'

import { AppDataSource } from './data-source'

import { type ServerOptions } from './types/server'


const { PORT } = process.env

const serverOptions: ServerOptions = { port: Number(PORT) }

async function main (): Promise<void> {
  console.log('Initializing data source...')
  await AppDataSource.initialize()
  console.log('Data source initialized...')
  const app = express()

  app.get('/', async (_req, res) => {
    res.send('Hello World!')
  })

  app.listen(serverOptions.port, () => {
    console.log(`Server listening on port ${serverOptions.port}`)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
