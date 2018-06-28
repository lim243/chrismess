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

    // deleteButton(ev){
    //     const item = ev.target.parentNode
    //     item.parentNode.removeChild(item)
    //     const count = ev.target.id
    //     flicksArray.splice(count,1,0)
    // }

    removeFlick(item){
        this.list.removeChild(item)
    }

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
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('id',this.flicksArray.length)
        deleteButton.textContent = 'delete'
        deleteButton.addEventListener('click', (_ev) => this.removeFlick(item))

        //add favourite button
        const fav = document.createElement('button')
        fav.textContent = '=)'
        fav.addEventListener('click', (this.favButton))

        item.appendChild(fav)

        item.appendChild(deleteButton)
    
        return item
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