const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920, // 窗口宽度
    height: 1080, // 窗口高度
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  });

  mainWindow.loadFile('./dist/index.html'); // 加载页面路径
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
  mainWindow.webContents.openDevTools();
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
