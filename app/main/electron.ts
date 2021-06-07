const path = require('path')
const {app, BrowserWindow} = require('electron')

const isDev = () => process.env.NODE_ENV === 'development'

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true, //注入node模块
            devTools: true,
            webSecurity: true
        }
    })

    if (isDev())
        mainWindow.loadURL(`http://127.0.0.1:7001`)
    else
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (!BrowserWindow.getAllWindows().length)
            createWindow()
    })
})