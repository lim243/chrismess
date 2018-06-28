class App{
    constructor(){
        
        this.list = document.querySelector('#flicks')
        
        this.flicksArray = []
        this.load()

        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.handleSubmit(ev)
        })
    }

    save() {
        //store flicksArray in localStorage
        localStorage.setItem('flicksArray',JSON.stringify(this.flicksArray))
    }

    load() {
         // load flicks from localStorage
        const flicksArray = JSON.parse(localStorage.getItem('flicksArray'))
        if(flicksArray){
            //add each flick to the UI
            flicksArray.forEach(flick => this.addFlick(flick))
        }
    }

    addFlick(flick){
        this.flicksArray.push(flick)
        
        const item = this.renderItem(flick)

        //mark as fav
        if(flick.favourite){
            item.classList.add('fav')
        }

        //add to DOM
        this.list.appendChild(item)
    }

    //create a span
    renderSpan(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }

    renderSpans(flick, item) {
        const div = document.createElement('div')
        div.classList.add('info')
    
        // get the list of properties
        const properties = Object.keys(flick)
    
        // loop over the properties
        properties.forEach((propertyName) => {
          // build a span, and append it to the div
          const span = this.renderSpan(propertyName, flick[propertyName])
          div.appendChild(span)
        })
    
        return div
      }

    removeFlick(flick,item){
        //remove from UI
        this.list.removeChild(item)

        //remove from array
        const index = this.flicksArray.indexOf(flick)
        this.flicksArray.splice(index, 1)

        //update localStorage
        this.save()
    }

    toggleFavourite(flick, item){
        //update both UI and the array
        flick.favourite = item.classList.toggle('fav')
        this.save()
    }

    renderItem(flick){
        //creates a item list
        const item = document.createElement('li')
        item.classList.add('flick')
    
        //gets the key for the object
        const properties = this.renderSpans(flick, item)
        item.appendChild(properties)

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
        this.addFlick(flick)
        this.save()

        f.reset()
        f.flickName.focus();
    }
}

const app = new App()