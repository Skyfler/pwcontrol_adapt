document.getElementById('send').addEventListener('click', addMsg);

function addMsg() {
	
	var msg = document.getElementById('message').value;
	/* alert(msg); */
	if (msg != '') {
		
		document.getElementById('message').value = '';
		
		var msgDate = new Date();
		var hrs = msgDate.getHours();
		if (hrs < 10) hours = '0' + hours;
		var mnts = msgDate.getMinutes();
		if (mnts < 10) minutes = '0' + minutes;
		
		var chat = document.getElementById('chat_window');
		
		chat.innerHTML += '<li>' +
		'<div class="msg_info">' +
		'<span class="user-name">' +
		'<span class="user-icon">' +
		'</span>Dark</span>'+
		'<span class="msg_time">' + hrs + ':' + mnts + '</span></div>' +
		'<span class="msg_text"></span>' +
		'</li>'
		
		chat.lastChild.getElementsByClassName('msg_text')[0].textContent = msg;	
	
		var scrollX = chat.clientHeight;
		/* alert(scrollX); */
		document.getElementById('chat_window_wraper').scrollTop = scrollX;
	}
}

var sliderControl = document.getElementById('slider_control');

var rndBtns = sliderControl.getElementsByTagName('a');

var overflowCont = document.getElementById('overflow');

var activeBtn = rndBtns[0];

var timer;

for(var i = 0; i < rndBtns.length; i++) {
	rndBtns[i].addEventListener('click', function() {activeBtn = this; changeActive();});
}

/* document.getElementById('trybutton').addEventListener('click', timerFnc); */

function timerFnc() {
	timer = setTimeout(slideOverTime, 3000);
}

function changeActive() {
	/* alert('ITS ALIVE!'); */
	for(var i = 0; i < rndBtns.length; i++) {
		rndBtns[i].classList.remove('active');
	}
	
	activeBtn.classList.add('active');
	/* alert(this.className); */
	
	sliderPosition();
}

function sliderPosition() {
	/* alert('ITS ALIVE TOO'); */
	switch (activeBtn) {
		case rndBtns[0]: 
			overflowCont.style.left = '0'
			/* alert('ITS ALIVE 1'); */
			break;
		case rndBtns[1]:
			overflow.style.left = '-100%'
			/* alert('ITS ALIVE 2'); */
			break;
		case rndBtns[2]:
			overflow.style.left = '-200%'
			/* alert('ITS ALIVE 3'); */
			break;
		case rndBtns[3]:
			overflow.style.left = '-300%'
			/* alert('ITS ALIVE 4'); */
			break;
		case rndBtns[4]:
			overflow.style.left = '-400%'
			/* alert('ITS ALIVE 5'); */
			break;
	}
	
	clearTimeout(timer);
	timerFnc();
}

function slideOverTime() {
	for (var i = 0; i < rndBtns.length; i++) {
		if (activeBtn == rndBtns[i]) {
			if (i == rndBtns.length-1) {
				activeBtn = rndBtns[0];
				break;
			} else {
				activeBtn = rndBtns[i+1];
				break;
			}
		}
	}
	
	changeActive();
}

timerFnc();