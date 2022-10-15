const DeltaBuilder = require('@electron-delta/builder');
const path = require('path');

const options = {
	productIconPath: path.join(__dirname, 'icon.ico'),
	productName: 'electron-sample-app',

	getPreviousReleases: async () => {
		return [
			// {
			//   version: '0.0.12',
			//   url: 'https://github.com/electron-delta/electron-sample-app/releases/download/v0.0.12/electron-sample-app-0.0.12.exe'
			// },
			// {
			//   version: '0.0.11',
			//   url: 'https://github.com/electron-delta/electron-sample-app/releases/download/v0.0.11/electron-sample-app-0.0.11.exe'
			// },
			// {
			//   version: '0.0.9',
			//   url: 'https://github.com/electron-delta/electron-sample-app/releases/download/v0.0.9/electron-sample-app-0.0.9.exe'
			// }
		];
	},
	sign: async (filePath) => {
		// sign each delta executable
	}
};

exports.default = async function (context) {
	const deltaInstallerFiles = await DeltaBuilder.build({
		context,
		options
	});
	return deltaInstallerFiles;
};
