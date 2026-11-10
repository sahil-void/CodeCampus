# Code Campus

**Learn to code, not just copy it.**

Code Campus is a beginner-friendly learning website with HTML, CSS and Python lessons, plus practice workspaces where you can write and run code in your browser. It is built with plain HTML, CSS and a little JavaScript, with no framework and no build step.

## What's inside

- **Home** with a light and a dark theme
- **Tutorials**: 6 Python lessons and 6 HTML/CSS lessons
- **Practice**: workspaces for HTML, HTML + CSS and Python, with starter code and an embedded [OneCompiler](https://onecompiler.com) editor
- **Contact** form with a thank-you page
- **About** page and a visual-only **Login** preview

## How it's built

| Part | What it does |
|---|---|
| **HTML** | Page structure and content. Navigation, the mobile menu and the expandable examples work without JavaScript. |
| **CSS** | Layout, glass-style cards, light/dark themes and responsive design. |
| **JavaScript** | Two small features only: `theme.js` (light/dark switch, remembered in the browser) and `compiler-run.js` (an extra Run button on small screens). The contact page also has a short script that sends messages. |
| **Libraries** | Bootstrap CSS, AOS (scroll animations), Google Fonts (Plus Jakarta Sans). |

## Project files

```
index.html, about.html, contact.html, thank-you.html, login.html
tutorials.html, tutorials-1..6.html     Python lessons
html-css-1..6.html                      HTML/CSS lessons
practice.html, practice-html.html, practice-html-css.html, practice-python.html

style.css, style_1.css                  main layout and design
theme.css, cards.css, lesson.css, contact.css, auth.css,
compiler-run.css, practice-pages.css    page-specific styles
theme.js, compiler-run.js               the only scripts
images/                                 logo and illustrations
vercel.json                             clean URLs on Vercel
```

## Run it locally

No install is needed. Download the project and open `index.html` in your browser. The code editors need an internet connection because they load from OneCompiler.

## Notes

- **Code editors:** Code Campus doesn't run code itself. The embedded OneCompiler service does.
- **Contact form:** messages are sent to a private Google Form owned by the site's author. Only a form address is in the code. There are no passwords or API keys.
- **Login page:** design preview only. It doesn't sign anyone in or store anything.

## Security

See [SECURITY.md](SECURITY.md) for how to report a problem.

## Author

Designed and coded by Sahil.
