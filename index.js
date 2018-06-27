
class App{
    constructor(){
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.handleSubmit(ev)
        })
    }

    //create a span
    renderProperty(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }

    renderItem(flick){
        //creates a item list
        const item = document.createElement('li')
        item.classList.add('flick')
    
        //gets the key for the object
        const properties = Object.keys(flick);
    
        //loops through the whole object and append it to item list
        properties.forEach((propertyName) => {
            //creates a span
            const span = this.renderProperty(propertyName, flick[propertyName])
            item.appendChild(span);
        })
        return item
    }

    handleSubmit(ev) {
        const f = ev.target

        //flick Object
        const flick = {
            name: f.flickName.value,
            year: f.flickYear.value,
        }
        const item = this.renderItem(flick)
    
        const list = document.querySelector('#flicks')
    
        list.appendChild(item)
    
        f.reset()
    }
}

const app = new App()
