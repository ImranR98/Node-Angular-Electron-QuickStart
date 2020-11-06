import { app, BrowserWindow } from 'electron'
import express from 'express'
import path from 'path'

import * as funcs from './funcs'

const PORT = 7259

let win: BrowserWindow | null

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    autoHideMenuBar: true,
    //icon: `file://...`
  })
  
  win.title = 'Hold on...'
  win.loadURL(`http://localhost:${process.env.PORT || PORT}`)
  win.on('closed', () => {
    win = null
  })
}

if (app) {
  app.on('ready', () => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { // It is common for MacOS apps to keep running
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
}

const expressApp: express.Application = express()

expressApp.use(express.json())
expressApp.use(express.static(path.join(__dirname, "/../frontend/dist/frontend")))

expressApp.get("/api/hello", async (req, res) => {
  res.send(await funcs.helloWorld())
})

expressApp.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../frontend/dist/frontend/index.html"))
})

expressApp.listen(process.env.PORT || PORT, () => {
  console.log(`Running (port ${process.env.PORT || PORT})`)
})