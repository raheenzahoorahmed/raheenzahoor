# My Personal Resume Website Project

https://raheenzahoorahmed.com/


Hey there! 👋 This is my first attempt at creating a personal resume website. I wanted to make something that shows who I am as a computer science student while also being fun and interactive. The website includes a random facts generator that shows different tech-related facts, quotes, and jokes - because who doesn't love a good tech joke? 😄

## Project Structure 📁

```
resume-website/
├── index.html              # Main webpage with all the content
├── styles.css              # All the pretty colors and layouts
├── script.js               # Makes things move and fetch random facts
└── worker.js               # The brain behind the random facts (Cloudflare Worker)
```

## Challenges I Faced (and How I Solved Them) 🤔

### 1. "Wait, where do I even start?"
When I first started, I was like, "Okay, I need a website... but how?" I had learned HTML and CSS in class, but putting it all together was a different story.

**Solution:** I broke it down into small pieces:
- First, I made a simple HTML page
- Then added some basic styling
- Finally, added the interactive parts one by one

### 2. "Why won't my styles work?!"
Sometimes my CSS just wouldn't do what I wanted. I'd write something and nothing would happen!

**Solution:** I learned to:
- Use the browser's developer tools (F12 is your friend!)
- Check if my CSS selectors matched my HTML
- Make sure I linked my CSS file properly in the HTML

### 3. "The random facts won't show up!"
Getting the Cloudflare Worker to work with my website was tricky. The facts just wouldn't appear!

**Solution:** I:
- Double-checked my API URL
- Made sure CORS was set up correctly
- Added error messages so I could see what went wrong
- Tested the API separately using Postman

### 4. "It looks weird on my phone!"
My website looked great on my laptop but terrible on my phone. Everything was all over the place!

**Solution:** I learned about:
- Responsive design
- Using Bootstrap's grid system
- Media queries to make things look good on all devices

### 5. "How do I make it look professional?"
I wanted my website to look good but didn't know much about design.

**Solution:** I:
- Used Bootstrap for a clean, modern look
- Added some simple animations
- Kept the color scheme simple and professional
- Asked friends for feedback on the design

### 6. "The deployment is confusing!"
Getting my website online was harder than I thought. Cloudflare Pages was new to me.

**Solution:** I:
- Followed the Cloudflare documentation step by step
- Made sure all my files were in the right place
- Checked the deployment logs when things went wrong
- Asked for help in the Cloudflare community

## What I Learned 📚

This project taught me so much! I learned about:
- Web development basics (HTML, CSS, JavaScript)
- APIs and how they work
- Cloudflare Workers and Pages
- Responsive design
- Debugging and problem-solving
- The importance of testing on different devices

## Finally My Personal Resume Website Project is Live now!

https://raheenzahoorahmed.com/
