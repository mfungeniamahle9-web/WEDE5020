# Planet Care Recycling Website - AI Coding Instructions

## Project Overview
Static website for **Planet Care PTY Ltd**, a South African recycling/waste management organization. Multi-page site with consistent branding, focused on education and community engagement.

## Architecture
- **Structure**: Plain HTML with centralized CSS (no frameworks, no build process)
- **Pages** (all share identical header/nav structure):
  - `index.html` - What is Recycling, process explanation
  - `about.html` - Mission, Vision, Team
  - `contact.html` - Contact form, details
  - `service.html` - Waste management services
  - `FAQS.html` - FAQ content
- **Shared Resources**: 
  - `css/style.css` - Single stylesheet with CSS custom properties
  - `images/` - Logo, team photos, process diagrams
  - Logo: `planet care logo.png` (displayed in every header)

## Critical Patterns & Conventions

### HTML Structure
- **Header**: Duplicated across ALL pages with identical markup:
  ```html
  <header class="site-header">
    <img src="images/planet care logo.png" alt="logo">
    <h2>Planet Care PTY Ltd</h2>
    <p>Recycling for a greener tomorrow, today.</p>
    <nav> <!-- 5 links: Home, About, Contact, Service, FAQS -->
  ```
- **Main content**: Wrapped in `<main>` tag; use `<main class="container">` on secondary pages
- **Semantic structure**: Proper h1/h2/h3 hierarchy; list items for features
- **Forms**: Contact form uses POST (no backend processing currently)

### CSS Architecture
- **Design system via `:root`**:
  - Color scheme: `#3b8d65` (dark green header), `#2f6f4f`, `#eef8f0` (background)
  - Primary text: `#1f4433`, accent: `#f6fff7`
  - Font: Lucida Sans family stack
  - Line-height: 1.6
- **Responsive utilities**:
  - `@media (max-width: 600px)` for mobile adjustments
  - `flex-wrap: wrap` for nav, `clamp()` for responsive font sizing
  - Padding strategy: `1.5rem` horizontal, `2rem` vertical
- **Reusable classes**:
  - `.btn`, `.btn-primary`, `.btn-secondary` - button variants
  - `.card`, `.box` - white cards with shadow
  - `.container` - max-width: 1100px, auto margins, centered
  - `.stack` - flexbox row with wrapping
  - `.muted` - reduced opacity text

### Developer Workflow
- **No build step**: Open `.html` files directly in browser
- **CSS changes**: Edit `css/style.css` directly, applies to all pages
- **Testing**: Manual browser testing (Chrome/Firefox)
- **Images**: Keep in `images/` folder, use relative paths (`images/filename`)
- **Typos to note**: CSS has `.site-nave` class (typo, unused), content has spelling errors ("oppoortunities", "Recyling")

## Common Tasks

### Adding a new page
1. Copy structure from `index.html` (header + nav + main)
2. Update `<title>` and main content
3. Add nav link to ALL existing pages' nav sections
4. Use `.container` wrapper if text-heavy content

### Modifying styles
- Update `:root` variables for site-wide color/font changes
- Maintain responsive design: check mobile appearance
- Use existing utility classes (`.btn`, `.card`) for consistency

### Form improvements
- Contact form in `contact.html` currently has no backend—consider validation or AJAX handling
- Form uses inline `<label>` styling; consider accessibility improvements

## File Reference
- [index.html](../index.html) - Main landing page, recycling education
- [css/style.css](../css/style.css) - Complete design system
- [about.html](../about.html) - Company mission/vision/team
- [contact.html](../contact.html) - Contact form, contact details
- [service.html](../service.html) - Service offerings
