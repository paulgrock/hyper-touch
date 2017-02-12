const { TouchBar } = require('electron');

const buttons = [new (TouchBar.Button)({
	label: `Click me`.toUpperCase(),
	click: () => {
		console.log('clicked')
	}
})]

exports.onWindow = (win) => {
	win.setTouchBar(new TouchBar(buttons));
}
