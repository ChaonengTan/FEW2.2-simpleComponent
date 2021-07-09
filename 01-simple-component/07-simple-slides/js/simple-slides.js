
// Creates a simple slideshow

/*

- Challenge - 1 - 

The goal is to make a slide show carousel. Follow the 
comments in the code sample below. 

- Challenge - 2 - 

If everything is working you should be able to control the 
time and transition speed of the slideshow by changing the 
attribues on the tag. 

- Challenge - 3 - 

Add a new attribute and property to create a pause state. 
The goal is to be able to stop and start the slideshow. 

*/

class SimpleSlides extends HTMLElement {
  constructor() {
    super() 
    
    // Use this.getAttribute to get the width, height, time, and transition
    this._width = this.getAttribute('width')
    this._height = this.getAttribute('height')
    this._time = this.getAttribute('time')
    this._transition = this.getAttribute('transition')


    // Create a shadow root node
    this._shadowRoot = this.attachShadow({ mode: 'open' })

    // Create a couple elements to manage slides
    // Create a container div
    // Set the width, height, border, and overflow
    // Append container to shadowroot
    this._container = document.createElement('div')
    this._container.style.width = `${this._width}px`
    this._container.style.height = `${this.height}px`
    this._container.style.border = 'black 2px solid'
    this._container.style.overflow = 'hidden'
    this.shadowRoot.appendChild(this._container)
    

    
    // Create an inner div
    // Add some styles display: flex, 
    // set transition to the value you got from the attribute add 'ms'
    // Append this to container
    this._inner = document.createElement('div')
    this._inner.style.display = 'flex'
    this._inner.style.transition = '200ms'
    this._container.appendChild(this._inner)


    // Get array of images
    this._imgs = Array.from(this.querySelectorAll('img'))
    // loop over all of the the images in the array and append then to the inner div
    this._imgs.forEach(img => {
      this._inner.appendChild(img)
    })
    
    // Keep track of the index of the current image displayed
    this._index = 0
    this._paused = false
    
  }

  // Use this add the interval/timer
  _addTimer() {
    // use setInterval with the interval set to the time you got from the attribute
    // The callback should call this._nextImg() 
    // Save a reference to your timer so you can remove it
    this._removeTimer()
    this._timer = setInterval(() => {
      this._nextImg()
    }, this._time)
  }

  // Use this method to remove the interval/timer
  _removeTimer() {
    // use clearInterval() to remove your interval. You need to include the timer reference
    clearInterval(this._timer)
  }

  // This method is called when this component is added to the DOM
  connectedCallback() {
    // Call this._addTimer() here 
    this._addTimer()
    this._nextImg()
  }

  // This method is called when this component is removed from the DOM
  disconnectedCallback() {
    // Call this._removeTimer() here. 
    this._removeTimer()
  }
  
  // Use this list all properties that your element observes 
  static get observedAttributes() {
    // List the properties you component is observing here: 
    // time, transition...
    return ['time', 'paused', 'transition']
  }

  // Use this function handle changes to attributes on the custom element
  attributeChangedCallback(name, oldValue, newValue) {
    // Set properties when attributes change
    switch(name) {
      case 'time': 
        // set your time property
        // remove your timer 
        // add a new timer
        this._time = newValue
        this._addTimer()
        break
    
      case 'transition':
        // Set your transition property
        // Set the transition style on the inner div be sure to 'ms'
        this._transition = newValue
        this._inner.style.transition = `${this._transition}ms`
        break 

      case 'paused': 
        // Stretch challenge Set a pause attribute 
        this._paused = newValue
        break

    }
  }

  // Use this function to advance to the next image or loop backl to the first image. 
  _nextImg() {
    // Add 1 to index if index is equal to the length of _imgs set it to 0. 
    // Set translate the inner div to width * index * -1
    // You need to translate the slides one slide width to the left 
    // each time this method is called. 
    this._index = (this._index+1)%this._imgs.length
    const x = this._index* -this._width
    this._inner.style.transform = `translate(${x}px, 0)`
  }
}

customElements.define('simple-slides', SimpleSlides)

// ***************************************************
// NOTE: This dosent work for some reason, I double checked with the solutions
// and even tried relinking src to the solutions .js file and it didnt work.
// ***************************************************