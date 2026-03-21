# AkashMurnalPortfolio — Detailed Project Instructions

## 1. Project Goal
- Build a professional portfolio website for an SDET (Software Development Engineer in Test) with 8+ years of experience.
- Highlight automation, CI/CD, cloud-native QA, and leadership skills.

## 2. Tech Stack & Setup
- Use React and Vite for a modern, fast, and maintainable frontend.
- Scaffold the project using Vite's React template.
- Install dependencies: framer-motion, react-icons, react-intersection-observer, EmailJS, etc.

## 3. UI/UX Design
- Create a visually appealing, responsive, and user-friendly interface.
- Implement a dark theme with accent colors.
- Add a hero section with name, title, and a professional profile image.
- Ensure all sections are accessible from the navbar.

## 4. Portfolio Sections
- **About:** Brief professional summary and personal introduction.
- **Skills:** List core skills (Test Architecture, CI/CD, Cloud QA, Automation Frameworks, etc.).
- **Experience:** Summarize work history, roles, and achievements.
- **Projects:** Highlight key projects with descriptions and technologies used.
- **Certifications:** List relevant certifications.
- **Contact:** Provide a form for visitors to reach out.
- **Resume:** Add a downloadable PDF resume.

## 5. Animations & Interactivity
- Use framer-motion for smooth section transitions and element animations.
- Add interactive buttons and hover effects.

## 6. Contact Form Integration
- Implement a contact form using EmailJS.
- Configure EmailJS with your Service ID, Template ID, and Public Key.
- Ensure form submissions are sent to murnalakash@gmail.com with the subject "Re: Portfolio".
- Validate form fields and provide user feedback (success/error messages).

## 7. Asset Management
- Store static assets (images, PDFs) in the `public/` directory for Vite compatibility.
- Reference images using Vite's `import.meta.env.BASE_URL` for correct production paths.

## 8. Deployment
- Deploy the site to GitHub Pages at https://aakashmurnal.github.io/ (username site).
- Set Vite's `base` to `'/'` in `vite.config.js` for correct asset loading.
- Set up a GitHub Actions workflow for automated deployment on push.

## 9. Troubleshooting & Fixes
- Resolve build errors, missing files, and asset path issues.
- Ensure the site works identically on localhost and GitHub Pages.
- Test all sections, links, and forms after each deployment.
- Commit, push, and redeploy after every fix.

## 10. Documentation
- Maintain a markdown file summarizing all user prompts, requirements, and project instructions for future reference.

---

This breakdown covers every major step and best practice followed to create, refine, and deploy your AkashMurnalPortfolio project. If you need further details or code samples for any step, let me know!