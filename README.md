# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Desktop](screenshot/desktopss.png)

![Mobile](screenshot/mobiless.png)


### Links

- Live Site URL: [live site here](https://rojansr.github.io/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanilla js

### What I learned

Building the logic for to open and close the dropdown with javascript was a great challenge to work with. I got a very deep knowledge of mobile responsiveness and some of the html stuff that I overlooked before!! 

```js
const proudOfThisFunc = () => {
  if (
    getComputedStyle(
      document.getElementById("one").children[1]
    ).getPropertyValue("display") == "block"
  ) {
    document
      .getElementById("one")
      .children[0].children[0].removeAttribute("style");
    document.getElementById("one").children[1].removeAttribute("style");
  } else {
    if (isActivated === true) {
      document.getElementById("one").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("one").children[1].style.display = "block";

      //remove all attribute but activate your own
      for (const index in masterDiv) {
        masterDiv[index].children[0].children[0].removeAttribute("style");
        masterDiv[index].children[1].removeAttribute("style");

        document.getElementById(
          "one"
        ).children[0].children[0].style.fontWeight = "700";
        document.getElementById("one").children[1].style.display = "block";
      }
      isActivated = true;
    } else {
      document.getElementById("one").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("one").children[1].style.display = "block";
      isActivated = true;
    }
  }
}
```

Ofcourse! It could've been much more cleaner and less complicated but I'm learning!! That's what matters isn't it? ;)


## Author

- Email - rojanrai1116@gmail.com

## Acknowledgments

Complete solo project