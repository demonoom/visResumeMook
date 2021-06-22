const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

const isDev = () => process.env.NODE_ENV === 'development';
// 获取当前应用程序在本机中的目录路径，仅能在主进程使用
const ROOT_PATH = path.join(app.getAppPath(), '../');

// 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event: { reply: (arg0: string, arg1: any) => void }, args: any) => {
  event.reply('reply-root-path', ROOT_PATH);
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // 注入node模块
      devTools: true,
      webSecurity: true,
    },
  });

  if (isDev()) mainWindow.loadURL(`http://127.0.0.1:7001`);
  else mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) createWindow();
  });
});
