const { app, BrowserWindow } = require("electron")
const isDev = require('electron-is-dev')
const childProcess = require('child_process')

app.whenReady().then(() => {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
            contextIsolation: false
        }
    });
    window.loadURL("http://localhost:5000");
    window.show()
    window.webContents.openDevTools();
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})
