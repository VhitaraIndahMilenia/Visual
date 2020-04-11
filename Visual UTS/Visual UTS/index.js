const electron = require("electron");
const {app, BrowserWindow, Menu} = electron;

let todayWindow;
let kelilingjajargenjangWindow;
let luasjajargenjangWindow;
let luaskerucutWindow;
let luaskubusWindow;
let luasprismasegitigaWindow;
let luastabungWindow;

app.on("ready", ()=> {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Menghitung Bangun Ruang"
    });

    todayWindow. loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const LuasJajarGenjangWindowCreator = () => {
    luasjajargenjangWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Jajar Genjang"
    });

    luasjajargenjangWindow.setMenu(null);
    luasjajargenjangWindow.loadURL(`file://${__dirname}/Ljajargenjang.html`);
    luasjajargenjangWindow.on("closed" , () => (luasjajargenjangWindow = null));
};

const KelilingJajarGenjangWindowCreator = () => {
    kelilingjajargenjangWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Keliling Jajar Genjang"
    });

    kelilingjajargenjangWindow.setMenu(null);
    kelilingjajargenjangWindow.loadURL(`file://${__dirname}/Klljajargenjang.html`);
    kelilingjajargenjangWindow.on("closed" , () => (kelilingjajargenjangWindow = null));
};

const LuasKubusWindowCreator = () => {
    luaskubusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kubus"
    });

    luaskubusWindow.setMenu(null);
    luaskubusWindow.loadURL(`file://${__dirname}/Lkubus.html`);
    luaskubusWindow.on("closed" , () => (luaskubusWindow = null));
}; 

const LuasTabungWindowCreator = () => {
    luastabungWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Tabung"
    });

    luastabungWindow.setMenu(null);
    luastabungWindow.loadURL(`file://${__dirname}/Ltabung.html`);
    luastabungWindow.on("closed" , () => (luastabungWindow = null));
};

const LuasPrismaSegitigaWindowCreator = () => {
    luasprismasegitigaWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Prisma Segitiga"
    });

    luasprismasegitigaWindow.setMenu(null);
    luasprismasegitigaWindow.loadURL(`file://${__dirname}/Lprismasegitiga.html`);
    luasprismasegitigaWindow.on("closed" , () => (luasprismasegitigaWindow = null));
};

const LuasKerucutWindowCreator = () => {
    luaskerucutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kerucut"
    });

    luaskerucutWindow.setMenu(null);
    luaskerucutWindow.loadURL(`file://${__dirname}/Lkerucut.html`);
    luaskerucutWindow.on("closed" , () => (luaskerucutWindow = null));
};

const menuTemplate = [
    {
        label: "Luas Jajar Genjang" ,
        click() {
            LuasJajarGenjangWindowCreator();
        }
    },

    {

        label: "Keliling Jajar Genjang" ,
        click() {
            KelilingJajarGenjangWindowCreator();
        }
    },

{

    label: "Luas Kubus" ,
    click() {
        LuasKubusWindowCreator();
    }
},

{
    label : "Luas Tabung" ,
    click() {
        LuasTabungWindowCreator();
    }

},


{
    label : "Luas Prisma Segitiga" ,
    click() {
        LuasPrismaSegitigaWindowCreator();
    }

},

{
    label : "Luas Kerucut" ,
    click() {
        LuasKerucutWindowCreator();
    }

}


]