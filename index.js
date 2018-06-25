// console.log('It Works!')
const button = document.querySelector('button');

// to change the heading after pressing button
function changeHeading() {
    const changeHeading = document.querySelector('h1');
    changeHeading.textContent = 'A new Heading!!';
}

button.addEventListener('click', changeHeading);