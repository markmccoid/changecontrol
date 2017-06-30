const path = require('path');
const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {

	if (process.env.NODE_ENV === 'development') {
		BrowserWindow.addDevToolsExtension('C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.4.0_0');
		BrowserWindow.addDevToolsExtension('C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0');
	}

  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
		minWidth: 600
  });
  mainWindow.loadURL(`file://${__dirname}/public/index.html`);

	if (process.env.NODE_ENV === 'development') {
		mainWindow.toggleDevTools();
	}
})
