
class rainbowText extends HTMLElement {
  constructor() {
    super();
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._text = document.createElement('div')
      this._shadowRoot.appendChild(this._text)

      const words = this.innerHTML.split(' ')
      words.forEach(word => {
        const newSpan = document.createElement('span')
        newSpan.innerHTML = word

        const hue = Math.random() * 360
        const color = `hsl(${hue}, 100%, 50%)`
        newSpan.style.color = color
        this.shadowRoot.appendChild(newSpan)
      })
  }
}

customElements.define('rainbow-text', rainbowText);

/*

- Challenge - 1 - 

All of the words in the 'rainbow-text' tag should each be a different
color. To make this happen you'll need to get the text from the source
tag, split into words, make a span for each word and style each of 
these spans with a color. 

Follow these steps: 

- Get the text from the source tag with this.innerHTML
- Split this into an array of words with split(' ')
- Loop over the words
  - Make a new span element with: document.createElement('span')
  - Set the innerHTML to the word from the array: el.innerHTML = arr[i]
  - Set the style to a color: el.style.color = someColor
  - Append the span to the shadowRoot: this._shadowRoot.appendChild(el)

To set the color you can use one of these methods. 

Set the color with something like this: 

const hue = 360 / words.length * i
const color = `hsl(${hue}, 100%, 50%)`

- Challenge - 2 - 

Modify the code to set the color of each letter.



*/