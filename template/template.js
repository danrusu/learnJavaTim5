// document.querySelectorAll uses a CSS elector for finding elements in the DOM
const headersNodelist = document.querySelectorAll('h1');  // get all h1 elements

const headers = [].slice.apply(headersNodelist); // convert from NodeList to Array
//const headers = [].slice.call(headersNodelist);

const header = headers[0]; // first header 
var headerClickCount = 0

console.log(`Header: ${header.innerHTML}`);

function messageAlert(){
	console.log(`click ${headerClickCount++} on ${header}`);
	alert('This is a "click" event handler on h1 element');
}

/*
// above messageAlert function can also be declared like this
const messageAlert = () => {
	console.log(`clicked ${headerClickCount++} on ${header}`);
	alert('This is a "click" event handler on h1 element');
};
*/

// add messageAlert function as handler for the 'click' HTML event
header.addEventListener('click', messageAlert);
