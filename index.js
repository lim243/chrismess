//1st button to change 1st heading
//2nd button to change 2nd heading
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

// to change the heading after pressing button
function changeFirstHeading() {
    const changeHeading = document.querySelector('h1');
    changeHeading.textContent = 'A new Heading!!';
}

const changeSecondHeading = function() {
    const changeSecondHeading = document.querySelector('#head2');
    changeSecondHeading.textContent = 'I am finally free!!';
}

button1.addEventListener('click', changeFirstHeading);
button2.addEventListener('click', changeSecondHeading);

//Forms
const form = document.querySelector('form#flickForm')

const addFlickToList = function(ev) {
    ev.preventDefault()
    const f = ev.target
    if(f.flickName.value == '' || f.flickYear.value == ''){
        alert('Please Do Not Leave Input Field Empty!')
    } else {
        const flickYear = f.flickYear.value
        const flickName = f.flickName.value

        const item = document.createElement('li')

        item.textContent = flickName + ' ' + flickYear

        const list = document.querySelector('#flicks')

        list.appendChild(item)
    }
    f.reset()
}

const createListItem = function(){
    
}

form.addEventListener('submit', changeHeading)

//REMARKS: document.querySelector() if id then use '#' if class then use '.'