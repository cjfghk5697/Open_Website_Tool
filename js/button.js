window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);


var keys = [];


//keyCode 중 1~9는 49~57임. ctrl은 17
function keysPressed(e) {
	keys[e.keyCode] = true;
	
	// Ctrl + 1
	if (keys[17] && keys[49]) {
		window.open('http://www.github.com ', '_blank'); 
	}
	
}

function keysReleased(e) {
	keys[e.keyCode] = false;
}



