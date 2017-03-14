const { TouchBar } = require('electron').remote;
const { TouchBarButton } = TouchBar;

const button = new TouchBarButton({
	label: `🦄 Click me`,
	click: () => {
		console.log('TouchBarButton was clicked');
	}
});

exports.onWindow = (win) => {
	win.setTouchBar(new TouchBar([button]));
}
