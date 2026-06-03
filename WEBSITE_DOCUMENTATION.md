# Planet Care Recycling Website - Comprehensive Documentation

## Website Overview

The Planet Care Recycling website is a professional, static website designed for Planet Care PTY Ltd, a South African waste management and recycling organization. The site serves as an educational platform and communication hub for the community, providing essential information about recycling processes, services, company values, and contact details. The website features a clean, modern design built with pure HTML and CSS, requiring no frameworks or build processes for maximum simplicity and accessibility.

## Site Structure and Navigation

The website consists of five main pages accessible through a consistent navigation menu present on every page. The primary pages include the Home page, which introduces recycling concepts and explains the recycling process; the About page, which details the company's mission, vision, and team members; the Service page, which outlines all waste management and recycling offerings; the Contact page, providing communication channels and a contact form; and the FAQS page for frequently asked questions. Each page maintains identical header and navigation structure, ensuring consistent user experience throughout the site. The navigation menu displays all five links in a horizontal layout that wraps responsively on mobile devices, allowing easy access to any section from anywhere on the website.

## Typography System

The typography system employs the Lucida Sans font family, a professional and widely-supported sans-serif typeface that ensures consistency across all browsers and devices. The base font size is set to 16 pixels with a line-height of 1.6, providing excellent readability and comfortable spacing between lines. Heading hierarchy is carefully structured with h1 elements serving as primary page titles in a responsive font size (ranging from 1.8rem to 2.5rem), h2 elements for major section headings (1.3rem to 1.8rem), h3 elements for subsection headings (1.1rem to 1.4rem), and h4 elements for smaller content divisions (typically 1rem). All headings utilize the color #2f6f4f (dark green), creating visual distinction from body text while maintaining the brand's environmental aesthetic. Paragraph text uses the primary color #1f4433 (deep forest green) with generous margins and maximum widths for optimal readability.

## Color Palette and Design System

The website implements a sophisticated color system rooted in environmental sustainability themes. The header uses a gradient background transitioning from #3b8d65 to #2f6f4f (various shades of green), establishing brand identity immediately. The background color #eef8f0 (very light green) creates a calming, natural atmosphere while maintaining excellent contrast for readability. Interactive elements like buttons use #2f8b5a for primary actions with darker hover states (#257246), while secondary buttons feature white backgrounds with green borders. Accent colors include #f6fff7 (off-white) for text on green backgrounds and #d6eadd (light border color) for subtle separations. This carefully curated palette evokes nature and environmental responsibility while maintaining professional appearance and accessibility standards.

## Responsive Design and Mobile Experience

The website prioritizes responsive design with deliberate mobile-first considerations. CSS utilizes viewport-relative units (clamp() functions) for font sizes, ensuring text scales appropriately across all device sizes. Media queries at 600px breakpoint adjust layout and spacing for smaller screens, reducing header logo size from 80px to 60px and adjusting padding from 2rem to 1.5rem. Navigation menu wraps flexibly on mobile devices, preventing text overflow. Images scale responsively with max-width: 100%, maintaining aspect ratios and adapting to screen sizes. Form inputs and buttons resize appropriately for touch interfaces, with adequate padding (0.75rem) for mobile usability. This approach ensures seamless experience whether users access the site via desktop browsers, tablets, or smartphones.

## Enhanced Features and Improvements

The website includes several modern web features enhancing user interaction and accessibility. Smooth CSS transitions (0.2s ease) on hover states for links and buttons provide visual feedback without jarring changes. Cards and boxes feature subtle box shadows (0 1px 4px with rgba color) creating depth while maintaining cleanliness. Interactive elements like cards and buttons have hover effects that slightly elevate them (transform: translateY(-2px)), indicating interactivity. The contact form includes accessibility labels with proper form input styling, featuring focus states with colored borders and box shadows for keyboard navigation support. Utility classes like .muted reduce opacity for secondary text, .stack creates flexible layouts, and .container provides consistent max-width (1100px) and centering. The footer includes business contact information, while horizontal rules use gradient transitions for subtle visual separation.

## Sitemap Structure

```
index.html (Home - Recycling Education)
├── about.html (Company Information)
├── contact.html (Communication & Booking)
├── service.html (Service Offerings)
└── FAQS.html (Frequently Asked Questions)
```

All pages connect through the unified navigation, supporting seamless browsing between sections with consistent branding and styling throughout.
