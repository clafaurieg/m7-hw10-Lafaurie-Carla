// acquire references to page elements
const nameSpan = document.querySelector('span');
const formEl = document.querySelector('form');
const clearBtn = document.getElementById('clear');
const saveBtn =document.getElementById('save');
const textarea = document.querySelector('textarea');



// Retrieve name and note content from cookies and localstorage
var cookies = document.cookie.split(";");
var nameCookie = cookies.find(function(cookie){
  return cookie.startsWith('name')
})
if(nameCookie){
  nameSpan.textContent = nameCookie.split('=')[1];
}



var notes = localStorage.getItem('notes');
textarea.value = notes;
// Then apply them to elements on the page


formEl.onsubmit = function(e) {
  e.preventDefault();
  // save name element's content to cookies
  // save textarea's content to localstorage
  let nameCookie = nameSpan.textContent;
  document.cookie = "name=" + nameCookie + ";"
  
  notes = textarea.value;
  localStorage.setItem('notes', notes);
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  textarea.value ="";
  localStorage.removeItem('notes');
  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp
