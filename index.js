const { TouchBar } = require('electron');
const { TouchBarButton } = TouchBar;

if (TouchBar) {
	const buttons = [new TouchBarButton({
		label: `Click me`.toUpperCase(),
		click: () => {
			console.log('clicked')
		}
	})]

	exports.onWindow = (win) => {
		win.setTouchBar(new TouchBar(buttons));
	}
}
