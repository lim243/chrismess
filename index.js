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

        let sFlickName = document.createElement('span')
        sFlickName.setAttribute('class', 'flickName')
        sFlickName.textContent = flickName + ' '
        
        let sFlickYear = document.createElement('span')
        sFlickYear.setAttribute('class', 'flickYear')
        sFlickYear.textContent = flickYear

        item.appendChild(sFlickName)
        item.appendChild(sFlickYear)

        const list = document.querySelector('#flicks')

        list.appendChild(item)
    }
    f.reset()
}

form.addEventListener('submit', addFlickToList)

//REMARKS: document.querySelector() if id then use '#' if class then use '.'