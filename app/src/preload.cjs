// preload.cjs

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	/**
	 * @param {string} channel
	 * @param {any} data
	 * 
	 * */
	send: (channel, data) => {
		ipcRenderer.send(channel, data);
	},
	/**
	 * @param {string} channel
	 * @param {any} data
	 * 
	 * */
	sendSync: (channel, data) => {
		ipcRenderer.sendSync(channel, data);
	},
	/**
	 * @param {string} channel
	 * @param {Function} func
	 * 
	 * */
	receive: (channel, func) => {
		ipcRenderer.on(channel, (event, ...args) => func(...args));
	},
	/**
	 * @param {string} channel
	 * @param {any} data
	 * 
	 * */
	invoke: async (channel, data) => {
		return await ipcRenderer.invoke(channel, data);
	}
});
