const display = document.getElementById('display');
const drumPads = document.getElementsByClassName('drum-pad');

window.onload = function() {
    for (let i = 0; i < drumPads.length; i++) {
        drumPads[i].addEventListener('click', playSoundByClick);
    }
    window.addEventListener('keypress', playSoundByKey);
}

function playSoundByClick(e) {
    console.log(e.target);
	e.target.firstElementChild.currentTime = 0;
	e.target.firstElementChild.play();
	e.target.classList.add('half-opacity');
	setTimeout(() => e.target.classList.remove('half-opacity'), 100);
	display.textContent = e.target.id;
}

function playSoundByKey(e) {
    for (let i = 0; i < drumPads.length; i++) {
        //console.log(drumPads[i].innerText.charCodeAt(0), e.keyCode - 32);
        if (drumPads[i].innerText.charCodeAt(0) == e.keyCode || 
            drumPads[i].innerText.charCodeAt(0) == e.keyCode - 32) {
                
            drumPads[i].firstElementChild.currentTime = 0;
	        drumPads[i].firstElementChild.play();
	        drumPads[i].classList.add('half-opacity');
	        setTimeout(() => drumPads[i].classList.remove('half-opacity'), 100);
	        display.textContent = drumPads[i].id;
            break;
        }
    }
}