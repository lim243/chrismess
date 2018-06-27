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

    deleteButton(ev){
        const item = ev.target.parentNode
        item.parentNode.removeChild(item)
        const count = ev.target.id
        flicksArray.splice(count,1,0)
        console.log(flicksArray)
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
        })

        const button = document.createElement('button')
        button.setAttribute('id',flicksArray.length)
        button.textContent = 'delete'
        button.addEventListener('click', this.deleteButton)



        item.appendChild(button)

        return item
    }

    handleSubmit(ev) {
        const f = ev.target
        
        const flick = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
        }
        const item = this.renderItem(flick)

        const list = document.querySelector('#flicks')

        this.renderArray(flick.name, flick.year)

        list.appendChild(item)

    
        f.reset()
    }
}



const flicksArray = []
const app = new App()