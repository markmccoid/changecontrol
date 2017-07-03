const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;
//Packager tutorial
//https://www.christianengvall.se/electron-packager-tutorial/
//-------------
//-Main process listener ('ready')
app.on('ready', () => {

	if (process.env.NODE_ENV === 'development') {
		BrowserWindow.addDevToolsExtension('C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.4.0_0');
		BrowserWindow.addDevToolsExtension('C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0');
	}

  mainWindow = new BrowserWindow({
    width: 660,
    height: 650,
		minWidth: 600
  });
  mainWindow.loadURL(`file://${__dirname}/public/index.html`);

	//Attach the main Menu
	const mainMenu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(mainMenu);

	if (process.env.NODE_ENV === 'development') {
		mainWindow.toggleDevTools();
	}
});
//-------------
//-Close process when all windows are closed
app.on('window-all-closed', function() {
 if (process.platform != 'darwin') {
		 app.quit();
	 }
});

//------------------------------------------
const exitAccelerator = process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q';
const devMenu = 	{
		label: 'Dev',
		submenu: [
			{role: 'reload'},
			{role: 'forcereload'},
			{role: 'toggledevtools'}
		]
	};

let menuTemplate = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Quit',
				accelerator: exitAccelerator,
				click() {
					app.quit();
				}
			}
		]
	}
];

//Add a 'Dev' menu option if in development mode
if (process.env.NODE_ENV === 'devlopment') {
	menuTemplate.push(devMenu);
}

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

// const menuTemplate = [
//   {
//     label: 'File',
//     submenu: [
//       {
//         label: 'New Todo'
//       },
//       {
//         label: 'Quit',
//         accelerator: (() => {
//           if (process.platform === 'darwin') {
//             return 'Command+Q';
//           } else {
//             return 'Ctrl+Q';
//           }
//         })(),
//         click() {
//           app.quit();
//         }
// 			}
//     ]
//   }
// ];
