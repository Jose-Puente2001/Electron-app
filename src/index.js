const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow
let newProduct

app.on('ready', ()=> {
	mainWindow = new BrowserWindow({width: 720, height: 600})
	mainWindow.loadURL(url.format({
       pathname: path.join(__dirname, 'views/index.html'),
       protocol: 'file',
       slashes: true
	}))

	const mainMenu = Menu.buildFromTemplate(templateMenu);
	Menu.setApplicationMenu(mainMenu);
	mainWindow.on('closed', () => {
    app.quit();
  });

});


function newProductWindow(){
	newProduct = new BrowserWindow({
		width: 400,
		height: 330,
		title: 'New Product'
	});
    
    newProduct.setMenu(null)
	newProduct.loadURL(url.format({
       pathname: path.join(__dirname, 'views/product.html'),
       protocol: 'file',
       slashes: true
	}))
}


const templateMenu =  [
	
	{
		label: 'File',
		submenu: [
		   {
		   	  label: 'New Product',
		   	  accelerator: 'Ctrl+N',
		   	  click() {
		   	  	newProductWindow();
		   	  }
		   }
		]
	},

	{
		label: 'Exit',
		accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
		click(){
			app.quit();
		}
	}
]