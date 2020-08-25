function startScript() { /* wrap within function startScript */
console.log('Hello world');
} 

document.addEventListener('DOMContentLoaded', startScript); /* execution of function startScript */
document.body.style.backgroundImage = 'url("img/bg.jpg")'; /* add image file */

var newDiv = document.createElement('Div'); /*create new Div element with id 'title-wrapper' */
newDiv.id = 'title-wrapper';
document.body.appendChild(newDiv);

/* styles for title wrapper */
document.getElementById('title-wrapper').style = 'margin-top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase;';

var headOne = document.createElement('h1'); /* create h1  */
headOne.id = 'title';
headOne.innerText = 'Work Under progress'; /* h1 title text-contnet */
document.getElementById('title-wrapper').appendChild(headOne);
headOne.style = 'width: fit-content; margin: auto; background: black; color: white;'; /* styles for h1 title */

/* Extra Tasks to be continued.... */
