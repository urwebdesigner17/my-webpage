// The typewriter element
var typeWriterElement = document.getElementById('typewriter');
// The TextArray:
var textArray = ["I love to code.", "I Love to Develop.", "Coding is my Passion"];
// function to generate the backspace effect
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack);
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};
// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () {
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};
// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);


//Tab links
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var sidemenu = document.getElementById('sidemenu');
function opentab(tabname){
	for(tablink of tablinks){
		tablink.classList.remove("active-link");
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add('active-link');
	document.getElementById(tabname).classList.add('active-tab');
}

function openmenu(){
	sidemenu.style.right = "0";
}
function closemenu(){
	sidemenu.style.right = "-200px";
}


//Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOivanSc9xv3z6Hn21p1wXxPA9lzozpvpHsNVV7QS7CnF3c7h-H16xew1CBykBcmDJyQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => {
		msg.innerHTML = "Message sent succesfully!"
		setTimeout(function(){
			msg.innerHTML = ""
		}, 5000)
		form.reset()
	})
	.catch(error => console.error('Error!', error.message))
})


//Back to top
var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

