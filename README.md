# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Age calculator](https://caleb-abuul.github.io/age-calculator/)

## My process

### Built with

I did not use any libraries or frameworks for this project. I went all native here.

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

While on this project, I learnt that you will never know how much stuff you have in you until you try. I felt I couldn't do it, but when I broke down the problem in manageable steps and began working on each piece, everything came together beautifully - not perfectly. Because I know that it could be done better. Well this is all I can do now, and it worked.

One really interesting thing I was able to do was write functions for the repeatitive tasks. that really simplified my work and made my code reader.

```js
const grabItem = (id) => document.getElementById(id);
```

```js
const displayAge = (id, message) =>
  (document.getElementById(id).innerText = message);
```

little functions such as these helped me saved a few lines of code and eased my work a great deal.

### Continued development

Going forward I would like to focus more on making accessible and inclusive apps and sites so that everyone would enjoy my little creations.

### Useful resources

While working on this project, I didn't quite consult a ton of resources, I just relied on previous knowledge and put my thoughts on paper before writing the code. and each time i got stuck, I would step back and come back at a later time with a fresh and new way of tackling the challenge.

By writing down my thoughts and thinking through what I wanted to do, I was figure thngs out, maybe not in the best way possible, but i did write the code and it ran :astonished:.

- [Web dev](<https://web.dev/articles/min-max-clamp#:~:text=Using%20the%20clamp()%20function,min(75ch%2C%2050%25)%3B%20>) - This helped me for setting responsive font-sizes, and `div` widths using `min()`, `max()`, and `clamp()` CSS functions. I really liked this pattern and will use it going forward.

- [Beatriz Caraballo](https://www.beatrizcaraballo.com/blog/responsive-text-squarespace) - This is an amazing article which helped me finally understand `clamp()` function. I'd recommend it to anyone still learning this concept.

## Author

- Github - [Caleb Abuul](https://github.com/Caleb-Abuul)
- Website - [Caleb](https://https://caleb-abuul.github.io/caleb/)
- Frontend Mentor - [@Caleb-Abuul](https://www.frontendmentor.io/profile/Caleb-Abuul)
- Twitter - [@CalebAbuul](https://www.twitter.com/CalebAbuul)
- LinkedIn - [@Caleb Abuul](www.linedin.com/in/caleb-abuul)

## Acknowledgments

Though I didn't consult much external resources for this project the wisdom of [Kevin Powell](https://github.com/kevin-powell) was a constant guide through out the project. He has been a great inspiration through his [YouTube Channel](https://youtube.com/@KevinPowell?si=Yhw2-yrCyeetnmys). He has tons of videos spanning several topics in CSS on YouTube. Please do well to check him out [Kevin Powell](https://youtube.com/@KevinPowell?si=Yhw2-yrCyeetnmys)
