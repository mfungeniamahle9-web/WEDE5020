# WEDE5020
PART 3
Planet Care Recycling — Website README

Overview:
Planet Care Recycling is a simple, static informational website created for Planet Care PTY Ltd, a South African recycling and waste-management organisation. The site is built with plain HTML, a single centralized CSS stylesheet, and minimal JavaScript — designed for lightweight distribution and direct browser viewing. Its primary goals are to educate visitors about recycling, present company services, share contact details, and promote community involvement.

Site structure:

Home: Explains "What is Recycling?", the recycling process, and why it matters. Includes a call-to-action card for pickup requests and service inquiries.
About: Company mission, vision, and team introductions.
Service: Detailed list of waste management, recycling, landfill, and site services provided.
Contact: Contact details, a simple contact form (client-side only), and embedded maps.
FAQS: Frequently asked questions page (present in the project).
Shared resources:
A single stylesheet implements the design system (variables, color palette, responsive utilities).
Images (logo, team photos, diagrams) are stored in the images folder.
Optional JS is minimal and referenced as an external script.
Design & accessibility:

Design uses CSS custom properties and a Lucida Sans font stack with clear color contrast (greens and light backgrounds) to reflect the brand.
Layout relies on semantic HTML: header, nav, main, section, and footer elements.
Buttons and form controls follow consistent utility classes (.btn, .card, .container, .stack).
Responsive behavior is provided via media queries (notably for screens under 600px) and flexible layout utilities like flex-wrap.
Developer notes:

No build tools are required — open the HTML files directly in a browser for testing.
Central stylesheet: update site-wide colors, typography, and spacing by editing the root variables in the main CSS file.
The contact form uses POST action="#" with no server processing. For production, replace the action with a working form endpoint or add client-side validation and an AJAX submission.
Images must remain in the images folder and referenced via relative paths.
Contributing:

To add pages, copy the existing header/nav structure to maintain consistent navigation and branding. Update the page title and add the new nav link to each page.
Keep styles consistent by reusing utility classes and .container wrappers for content-heavy pages.
Contact:
For content updates or deployment questions, reach the site owner via the contact details on the Contact page. 
