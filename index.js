const form = document.querySelector('form#flickForm')



const addFlickToList = function(ev) {
    ev.preventDefault()
    const f = ev.target

    if(f.flickName.value == '' || f.flickYear.value == ''){
        alert('Please Do Not Leave Input Field Empty!')
    } else {
        // const item = document.createElement('li')
        const flick = {
            name: f.flickName.value,
            year: f.flickYear.value,
        }
        const item = renderItem(flick)

        const list = document.querySelector('#flicks')

        list.appendChild(item)
    }
    f.reset()
}


const renderItem = function(flick){
    //creates a item list
    const item = document.createElement('li')
    item.classList.add('flick')

    //gets the key for the object
    const properties = Object.keys(flick);

    //loops through the whole object and append it to item list
    properties.forEach(function propertyName() {
        const span = renderProperty(propertyName, flick[propertyName])
        item.appendChild(span);
    })
    
    return item
}

//create a span
const renderProperty = function(name, value){
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
}

form.addEventListener('submit', addFlickToList)