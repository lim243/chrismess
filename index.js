class App{
    constructor(){
        this.flicksArray = []
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.handleSubmit(ev)
        })
    }

    //create a span
    renderSpan(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }

    deleteButton(ev){
        const item = ev.target.parentNode
        item.parentNode.removeChild(item)
        const count = ev.target.id
        flicksArray.splice(count,1,0)
    }

    // renderArray(name, year){
    //     flicksArray.push(`${name}: ${year}`)
    // }

    favButton(ev){
        const item = ev.target.parentNode;
        item.classList.add('favourite');
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

        //add delete button
        const button = document.createElement('button')
        button.setAttribute('id',flicksArray.length)
        button.textContent = 'delete'
        button.addEventListener('click', this.deleteButton)

        //add favourite button
        const fav = document.createElement('button')
        fav.setAttribute('id',flicksArray.length)
        fav.textContent = '=)'
        fav.addEventListener('click', (this.favButton))

        item.appendChild(fav)

        item.appendChild(button)
    
        return item
    }

    handleSubmit(ev) {
        const f = ev.target
        
        const flick = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
            favourite = false,
        }
        this.flicksArray.push(flick)

        const item = this.renderItem(flick)

        const list = document.querySelector('#flicks')

        // this.renderArray(flick.name, flick.year)

        list.appendChild(item)

    
        f.reset()
        f.flickName.focus();
    }
}

const app = new App()