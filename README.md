# Warkfin Tech

Warkfin Tech is a static marketing and service website for professional ICT, CCTV, networking, solar, electrical, web development, and training services in Nigeria.

## Features

- Professional multi-page marketing and service website
- Service and project showcase pages
- Formspree-powered contact, quote, and training forms compatible with GitHub Pages
- Dark mode toggle with saved user preference
- SEO metadata, favicon, and social preview-ready setup
- Legal pages for privacy and terms
- GitHub Pages deployment-friendly structure

## Services

- ICT Solutions
- Computer Networking
- CCTV & Security
- Solar & Power
- Electrical Installation
- Satellite Installation
- Web Development
- Graphic Design
- Video Production & Editing
- ICT Training

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome
- AOS animations

## Project Structure

- `index.html` – main homepage
- `about.html` – company overview
- `services.html` – service listing
- `portfolio.html` – project gallery
- `training.html` – training page
- `blog.html` – blog landing page
- `contact.html` – contact page
- `quote.html` – quote request page
- `STYLE.css` – core styling
- `responsive.css` – mobile behavior
- `dark-mode.css` – dark mode styles
- `Main.js` – shared interactions
- `portfolio-filter.js` – portfolio filtering
- `forms.js` – static form handling
- `dark-mode.js` – user preference theme logic

## Run Locally

Open the site directly in a browser or serve it locally with:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Deploy to GitHub Pages

1. Create a GitHub account if you do not already have one.
2. Sign in to GitHub and click New repository.
3. Give the repository a name such as `Warkfin-Tech` or similar.
4. Choose Public visibility for the repository if you want the site to be visible on GitHub Pages without private restrictions.
5. Click Create repository.
6. In VS Code, open the terminal in this project folder and connect it to GitHub using the repository URL.
7. Run the following commands in order:

```bash
git init
git add .
git commit -m "Initial website setup"
git branch -M main
git remote add origin https://github.com/warkfin003-source/Warkfin-Tech.git
git push -u origin main
```

8. On GitHub, open the repository and go to Settings > Pages.
9. In the Source section, choose `Deploy from a branch`.
10. Set the branch to `main` and the folder to `/root`.
11. Click Save.
12. Wait a few minutes for GitHub Pages to publish the site.
13. Visit the URL in the format:

Use the published GitHub Pages address shown in your repository’s Pages settings.

14. If you later add a custom domain, create a file named `CNAME` with your domain name and enable the custom domain in GitHub Pages.

## Update the Site URL After Publishing

Once your GitHub Pages site is live, add the final published URL to:

- `index.html`
- `robots.txt`
- `sitemap.xml`

with the exact published URL, such as:

```text
https://warkfin003-source.github.io/Warkfin-Tech/
```

or your custom domain if you add one later.

## Add Projects

- Replace the capability showcase cards in `portfolio.html` with real project images.
- Update the title, location, category, and project details text.
- Keep the existing gallery structure and add new cards when needed.

## Add Blog Posts

- Update `blog.html` with new article cards.
- Add real article titles, dates, categories, and call-to-action links.
- Keep the structure simple for future additions.

## Update Contact Information

The public site currently displays the verified contact email: `warkfin003@gmail.com`. Add phone, WhatsApp, and social-media links only when verified.

## Replace Images

Use your own branded images in the `img/` folder and update the existing `src` values in HTML files.

## Customize Branding

Brand colors already reflect the official Warkfin Tech palette:

- Royal Blue: `#0057D9`
- Deep Navy: `#0A1F44`
- White: `#FFFFFF`
- Light Gray: `#F5F7FA`
- Orange: `#FF7A00`

## Notes

- This is a static website. Its public forms submit directly to Formspree and show on-page success or error feedback.
- Do not add server-side PHP or database logic for GitHub Pages deployment.
- The React, Vite, Python, and local-server helper files are non-deployment development files; GitHub Pages serves the static HTML, CSS, JavaScript, and image assets from the repository root.

