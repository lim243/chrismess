//1st button to change 1st heading
//2nd button to change 2nd heading
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

// to change the heading after pressing button
function changeHeading() {
    const changeHeading = document.querySelector('h1');
    changeHeading.textContent = 'A new Heading!!';
}

const changeSecondHeading = function() {
    const changeSecondHeading = document.querySelector('#head2');
    changeSecondHeading.textContent = 'I am finally free!!';
}

button1.addEventListener('click', changeHeading);
button2.addEventListener('click', changeSecondHeading);


//remarks document.querySelector() if id then use '#' if class then use '.'