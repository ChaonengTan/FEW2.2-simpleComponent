
class FancyCounter extends HTMLElement {
  constructor() {
    super();
		
		// Create a shadow node
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    // Create a container element
		this._container = document.createElement('div')
		// Append the container to the shadow root
		this._shadowRoot.appendChild(this._container)
		// Create three elements left button display and right button
		this._leftButton = document.createElement('div')
		this._display = document.createElement('div')
		this._rightButton = document.createElement('div')
		// Append all three elements to the container
		this._container.appendChild(this._leftButton)
		this._container.appendChild(this._display)
		this._container.appendChild(this._rightButton)
		// Style the container use display: flex
		this._container.style.display = 'flex'
		// Style the left and right element. These should look like a buttons
		const left = this._leftButton.style
		left.border = 'black 2px solid'
		left.padding = '.5rem .7rem'
		left.display = 'flex'
		left.justifyContent = 'center'
		left.alignItems = 'center'
		const right = this._rightButton.style
		right.border = 'black 2px solid'
		right.padding = '.5rem .7rem'
		right.display = 'flex'
		right.justifyContent = 'center'
		right.alignItems = 'center'
		// Style the dipslay element. We need a big number
		const display = this._display.style
		display.padding = '1rem'
		display.fontSize = '1.5rem'
		// Define some properties to track the value displayed in the component
		this._value = 0
		// Display the value in the display element
		this._display.innerHTML = this._value
		// Add an event to the left button. The left button should add 1 to 
		// the value and update the value displayed 

		// Add an event to the right button that subtracts 1 from the value
		// then update the value displayed. 
	}
	
	// Use this increase the value 
	_increment = e => {
		this._value+=1
		this._display.innerHTML = this._value
		this.dispatchEvent(new Event('change'))
	}

	// Use this to decrement your value
	_decrement = e => {
		this._value-=1
		this._display.innerHTML = this._value
		this.dispatchEvent(new Event('change'))
	}

	// Use this to update the value displayed
	_update() {
		
	}


  // Tell this component it should look for changes to time
  static get observedAttributes() {
    return [];
  }  


  // Handle changes to time
  attributeChangedCallback(name, oldValue, newValue) {
    
  }

	
  connectedCallback() {
    this._rightButton.addEventListener('click', this._increment)
	this._leftButton.addEventListener('click', this._decrement)
  }

  disconnectedCallback() {
    this._rightButton.removeEventListener('click', this._increment)
	this._leftButton.removeEventListener('click', this._decrement)
  }
}

customElements.define('fancy-counter', FancyCounter);


/*

Your goal is to create a counter component. The counter should display a value
and two buttons that increment and decrement the value. It might look like this: 

< 0 >

- Challenge - 1 - 

Read through the code snippet above. Follow the comments and build the counter component. 

- Challenge - 2 - 

Use some nested elements to create arrows inside the left and right buttons. 

- Challenge - 3 - 

The counter would be even better if you could configure the min and max range and the 
step value. To do this you'll need to define some attributes. 

Add min, max, value, and step to the list of observedAttibutes. 

Look for changes in these attributes with the attributeChangedCallback() Inside this method 
add an if else of switch statement. You'll need to look at the name to determine the value 
of to be set. 

if (name === 'vlaue') {
	// set the value to newValue
	// update the displayed value
} else if (name === 'min') {
	// set the min value
	// ...
} else if () {
	// etc. 
}

*/
