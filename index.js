const form = document.querySelector('form#flickForm')

const addFlickToList = function(ev) {
    ev.preventDefault()
    const f = ev.target

    if(f.flickName.value == '' || f.flickYear.value == ''){
        alert('Please Do Not Leave Input Field Empty!')
    } else {
        const item = document.createElement('li')

        addFlickNameToItemList(f,item)
        addFlickYearToItemList(f,item);

        const list = document.querySelector('#flicks')

        list.appendChild(item)
    }
    f.reset()
}

//create a span
const renderProperty = function(name, value){
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
}

function addFlickYearToItemList(f,item){
    const flickYear = f.flickYear.value;
    let sFlickYear = document.createElement('span')
    sFlickYear.setAttribute('class', 'flickYear')
    sFlickYear.textContent = flickYear
    item.appendChild(sFlickYear)
}

function addFlickNameToItemList(f,item){
    const flickName = f.flickName.value;
    let sFlickName = document.createElement('span')
    sFlickName.setAttribute('class', 'flickName')
    sFlickName.textContent = flickName + ' '
    item.appendChild(sFlickName)
}

form.addEventListener('submit', addFlickToList)

//REMARKS: document.querySelector() if id then use '#' if class then use '.'