const flicksArray = []

class App{
    constructor(){
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

    renderArray(name, year){
        flicksArray.push(`${name}: ${year}`)
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
            // const itemArr = this.renderArray(flick[propertyName],)
        })
        return item
    }

    // renderArray()

    handleSubmit(ev) {
        const f = ev.target

        //flick Object
        const flick = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
        }
        const item = this.renderItem(flick)
    
        const list = document.querySelector('#flicks')
    
        list.appendChild(item)

        this.renderArray(flick.name, flick.year)
        // console.log(flicksArray)
    
        f.reset()
    }
}

const app = new App()
