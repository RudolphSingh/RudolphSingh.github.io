# PORTFOLIO_OS v3.0

A terminal-themed developer portfolio with phosphor-green CRT aesthetics, built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, zero dependencies.

**[Live Demo →](https://YOUR_HANDLE.github.io/portfolio)**

---

## 🚀 Deploy to GitHub Pages in 3 steps

### 1. Create the repository

```bash
# Clone or download this repo, then push to GitHub
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_HANDLE/YOUR_HANDLE.github.io.git
git push -u origin main
```

> **Tip:** Name your repo `YOUR_HANDLE.github.io` (replacing `YOUR_HANDLE` with your actual GitHub username) and it will deploy at `https://YOUR_HANDLE.github.io` — no configuration needed.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select `Deploy from a branch`
4. Set branch to `main` and folder to `/ (root)`
5. Click **Save**

Your site will be live at `https://YOUR_HANDLE.github.io` within ~60 seconds.

### 3. (Optional) Custom domain

Add a `CNAME` file to the root of your repo containing your domain:

```
yourname.dev
```

Then point your domain's DNS to GitHub Pages — see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## ✏️ Personalizing your portfolio

All content to edit is marked with `🔧 EDIT:` comments in `index.html`. Here's a quick reference:

| What to change | Where |
|---|---|
| Your name | `index.html` — `<h1 class="hero-name">` and footer |
| Taglines | `index.html` — `.tagline-row` elements in HOME section |
| City, availability, experience | `index.html` — `SYSTEM_STATUS.LOG` panel |
| GitHub / LinkedIn / Twitter links | `index.html` — `.link-row` and CONTACT section |
| Bio text | `index.html` — `.terminal-output` in ABOUT section |
| Stats (years, projects, etc.) | `index.html` — `RUNTIME_STATS.SYS` table |
| Education | `index.html` — `EDUCATION.LOG` table |
| Skills & proficiency bars | `index.html` — `data-w="0-100"` on `.skill-bar` elements |
| Projects | `index.html` — `.project-entry` blocks in PROJECTS section |
| Resume PDF | Drop `resume.pdf` in the root folder |

### Adding a project

Copy and paste this block inside `.projects-list` in `index.html`:

```html
<div class="project-entry reveal">
  <div class="proj-header">
    <span class="proj-id">PROJECT_04</span>
    <span class="proj-status live">● LIVE</span>
    <!-- Use class="proj-status wip" for works-in-progress -->
  </div>
  <div class="proj-body">
    <div>
      <div class="proj-name">YOUR_PROJECT_NAME</div>
      <div class="proj-desc">Your project description here.</div>
      <div class="proj-tags">
        <span class="proj-tag">Tech</span>
        <span class="proj-tag">Stack</span>
      </div>
    </div>
    <div class="proj-links">
      <a href="https://github.com/..." target="_blank" rel="noopener" class="proj-link">[ GITHUB ↗ ]</a>
    </div>
  </div>
</div>
```

### Enabling real contact form emails

The contact form currently shows a success message only. To receive actual emails:

**Option A — Formspree (free tier available):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. In `script.js`, remove the `e.preventDefault()` line from the submit handler

**Option B — Netlify Forms** (if deploying to Netlify instead):
Add `netlify` attribute to the form tag:
```html
<form class="contact-form" id="contactForm" netlify>
```

---

## 📁 File structure

```
portfolio/
├── index.html      # All page content and structure
├── style.css       # All styles and animations
├── script.js       # Clock, scroll reveal, skill bars, form
├── resume.pdf      # Add your resume here (optional)
├── .gitignore
└── README.md
```

---

## 🎨 Customizing the color theme

All colors are CSS variables at the top of `style.css`. Change these to retheme the entire site:

```css
:root {
  --green:   #00ff41;   /* Primary accent — try #00d4ff for blue */
  --green2:  #00cc33;   /* Secondary accent */
  --amber:   #ffb000;   /* Warning / CTA color */
  --cyan:    #00e5ff;   /* Tag / info color */
  --black:   #050a05;   /* Page background */
  --dark:    #080f08;   /* Section/nav background */
  --panel:   #0b130b;   /* Card backgrounds */
}
```

---

## 📄 License

MIT — free to use, modify, and deploy as your own portfolio. No attribution required (but appreciated!).
