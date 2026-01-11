# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I used flex box to position the both containers on the left and right positions then also used position fixed to align the cvc numbers in its rightful position. 
Used javascript to update the input on the card prototype in real time with the onKeyUp event in HTML attribute.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Event listeners 
- Regular Expressions Regex



### What I learned

New things I learned in this project include the use of regular expressions (Regex) to validate input field ensuring any other digit aside numbers triggers the error state. 

Some of my favorite code snippets inthis projects are written below:


```css
article span:first-child{
    letter-spacing: 2px;
}
```
```js
 const value = cardNumberInput.value;
    // regex=regular expressions
    // regex explanation: \D matches any character that is not a digit
    if (/\D/g.test(value)) {
      thanks.style.display = "none";
      main.style.display = "flex";
      errornumnew.style.display = "flex";
    }
```


### Continued development

I would love to focus more on the use of Regular Expressions 


## Author

- Website - [Tomosori Ayomide Gabriel](https://tomosoriayomidegabriel.verce.app)
- Frontend Mentor - [@tomosoriayomidegabriel](https://www.frontendmentor.io/profile/tomosoriayomidegabriel)
- Twitter - [@veraglib](https://www.twitter.com/veraglib)