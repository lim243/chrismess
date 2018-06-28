class App{
    constructor(){
        this.flicksArray = []
        this.list = document.querySelector('#flicks')
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.handleSubmit(ev)
        })
    }

    save() {
        localStorage.setItem('flicksArray',JSON.stringify(this.flicksArray))
    }

    load() {
        const flicksArray = JSON.parse(localStorage.getItem('flicks'))
        this.flicksArray = flicksArray
    }

    //create a span
    renderSpan(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }

    removeFlick(flick,item){
        //remove from UI
        this.list.removeChild(item)

        //remove from array
        const index = this.flicksArray.indexOf(flick)
        this.flicksArray.splice(index, 1)
    }

    toggleFavourite(flick, item){
        //update both UI and the array
        flick.favourite = item.classList.toggle('fav')
    }

    renderItem(flick){
        //creates a item list
        const item = document.createElement('li')
        item.classList.add('flick')
    
        //gets the key for the object
        const properties = Object.keys(flick);
    
        //loops through the whole object and append it to item list
        properties.forEach( (propertyName) => {
            //creates a span
            const span = this.renderSpan(propertyName, flick[propertyName])
            item.appendChild(span)
        })

        //add action buttons
        const actions = this.renderActionButtons(flick,item)
        item.appendChild(actions)
    
        return item
    }

    renderActionButtons(flick, item) {
        //to separate buttons with divs
        const actions = document.createElement('div')
        actions.classList.add('actions')

        //add delete button
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('remove')
        deleteButton.textContent = 'delete'
        deleteButton.addEventListener('click', (_ev) => this.removeFlick(flick, item))

        actions.appendChild(deleteButton)

        //add favourite button
        const favouriteButton = document.createElement('button')
        favouriteButton.classList.add('fav')
        favouriteButton.textContent = '=)'
        favouriteButton.addEventListener('click', (_ev) => (this.toggleFavourite(flick,item)))

        actions.appendChild(favouriteButton)

        return actions
    }

    handleSubmit(ev) {
        const f = ev.target
        
        const flick = {
            name: f.flickName.value,
            year: f.flickYear.value,
            favourite : false,
        }
        this.flicksArray.push(flick)

        const item = this.renderItem(flick)

        this.list.appendChild(item)

        f.reset()
        f.flickName.focus();
    }
}

const app = new App()