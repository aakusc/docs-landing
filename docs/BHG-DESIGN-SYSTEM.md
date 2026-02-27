# Blue Horizons Group Design System
## Website Design Reference Guide

**Source:** https://bluehorizonsgroup.com/
**Last Updated:** February 7, 2026
**Purpose:** Reference document for maintaining design consistency across Blue Horizons Group digital properties

---

## Design Philosophy

Blue Horizons Group employs a **modern, professional B2B/SaaS aesthetic** that prioritizes trust, clarity, and usability. The design balances traditional corporate professionalism (blues) with energetic accent colors (coral/rust red) to create visual interest without distraction.

**Key Principles:**
- Clean, minimalist structure with generous whitespace
- Accessibility-focused with semantic HTML and ARIA roles
- Performance-optimized with lazy loading and resource preloading
- Data-driven customization using CSS custom properties
- Enterprise-appropriate restraint with strategic accent highlights
- Mobile-first responsive design with progressive enhancement

---

## 1. Color Palette

### Primary Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Professional Blue** | `#066aab` | Primary buttons, CTAs, links |
| **Coral/Rust Red** | `#dc716d` | Icons, highlights, visual accents |
| **Deep Blue** | `#3666b0` | Secondary accents, hover states |

### Neutral Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **White** | `#ffffff` | Page backgrounds, card fills |
| **Light Gray** | `#f2f2f2` | Section backgrounds, subtle fills |
| **Dark Blue-Gray** | `#3c475c` | Body text, primary content |
| **Medium Gray** | `#747474` | Secondary text, meta information |
| **Border Gray** | `#d2d2d2` | Input borders, dividers |

### Semantic Colors

| Purpose | Hex Code | Usage |
|---------|----------|-------|
| **Error** | `#d63637`, `#e0284f` | Form validation, error states |
| **Success** | `#65bc7b`, `#7bdcb5` | Confirmations, positive actions |
| **Link Hover** | `#cf2e2e` | Interactive link hover states |

### Special Effects

- **Blockquote Border:** `#65bc7b` (4px solid left border)
- **Blockquote Background:** `#f5f5f5`
- **Card Border:** `#eaeaea` (1px solid)
- **Card Emphasis:** 3px bottom border for visual weight

---

## 2. Typography

### Font Families

```css
/* Primary font stack */
font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Icon fonts */
font-family: 'awb-icons', 'BHG3', 'Blue-Horizon-Group-Final-Icons';
```

**Primary Typeface:** Proxima Nova (custom font)
**Fallback Strategy:** System fonts for performance and consistency

### Font Sizes

| Element | Size | Usage |
|---------|------|-------|
| **Body Default** | `16px` | Standard paragraph text |
| **Labels** | `16.5px` | Form labels, small headings |
| **Meta Text** | Variable (`--meta_font_size`) | Dates, tags, auxiliary info |
| **H1** | `2em` (base), up to `66px` | Page titles, hero headings |
| **Buttons** | `17px` | CTA button text |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| **Regular** | `400` | Body text, descriptions |
| **Medium** | `500` | Button text, emphasis |
| **Bold** | `700` | Labels, strong emphasis, headings |

### Heading Hierarchy

```
H1: 2em–66px (hero titles)
H2: Large section headers
H3: Subsection titles
H4-H6: Content hierarchy
```

---

## 3. Layout Patterns

### Grid System

**Approach:** Flexbox-based responsive layout with float fallbacks

- **Content Column Width:** `71.1702128%` (asymmetric golden ratio)
- **Full-Width Option:** Available for hero sections and full-bleed content
- **Padding System:** `55px 10px 45px` for main content areas
- **Grid Gaps:** Configurable via `--blog_archive_grid_column_spacing`

### Spacing System

**Vertical Rhythm:**
```css
--field-margin: 1em; /* Form field spacing */
--section-padding: 55px 10px 45px; /* Content sections */
--container-padding: 20px–40px; /* Responsive container padding */
```

**Breakpoints:**
```css
/* Small devices */
@media (max-width: 640px) { /* Mobile */ }

/* Medium devices */
@media (min-width: 641px) and (max-width: 1024px) { /* Tablet */ }

/* Large devices */
@media (min-width: 1025px) { /* Desktop */ }
```

### Responsive Visibility

```css
.fusion-no-small-visibility { /* Hidden on ≤640px */ }
.fusion-no-medium-visibility { /* Hidden on 641px–1024px */ }
.fusion-no-large-visibility { /* Hidden on ≥1025px */ }

.sm-text-align-left { /* Alignment per breakpoint */ }
```

---

## 4. Component Styles

### Buttons

**Primary Button:**
```css
height: 41px–43px;
background-color: #066aab;
color: #ffffff;
padding: 0 15px;
border-radius: 3px;
font-size: 17px;
font-weight: 500;
transition: all 0.2s ease;
```

**Hover State:**
- Background darkens slightly
- Cursor changes to pointer
- Subtle scale or shadow effect

### Form Elements

**Input Fields:**
```css
height: 43px; /* Customizable via CSS variable */
border: 1px solid #d2d2d2;
padding: 8px 15px;
background: #ffffff;
font-size: 16px;
border-radius: 3px;
```

**Focus State:**
```css
border-color: var(--focus-border-color);
outline: none;
```

**Error State:**
```css
border-color: #e0284f;
box-shadow: 0 0 1.5px 1px rgba(224, 40, 79, 0.65);
```

### Cards

**Blog/Content Cards:**
```css
border: 1px solid #eaeaea;
border-bottom-width: 3px; /* Emphasis */
padding: 30px 25px 20px;
background: #ffffff;
transition: all 0.3s ease;
```

**Card Hover:**
- Border color changes
- Subtle elevation via shadow
- Image/content transitions

### Navigation

**Link Styles:**
```css
color: #066aab;
text-decoration: none;
transition: all 0.2s ease;
```

**Hover State:**
```css
color: #cf2e2e; /* Vivid red */
border-bottom-color: var(--link_hover_color);
```

---

## 5. Visual Effects

### Gradients

**Image Overlays:**
```css
background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
```

**Preset Gradients:**
- Vivid cyan to purple
- Professional blue to deep blue
- Customizable via design system

### Shadows

**Preset Shadow System:**
- **Natural:** Soft, subtle elevation
- **Deep:** Pronounced depth for modals
- **Sharp:** Crisp definition for cards
- **Outlined:** Border-like shadow
- **Crisp:** Clean, modern shadow

**Focus Shadow Example:**
```css
box-shadow: 0 0 1.5px 1px rgba(224, 40, 79, 0.65);
```

### Animations & Transitions

**Standard Transitions:**
```css
transition: all 0.2s ease; /* Quick interactions */
transition: all 0.3s ease; /* Medium interactions */
transition: all 0.5s ease-in-out; /* Smooth, noticeable changes */
```

**Hover Effects:**
- Transform effects (scale, translate)
- Opacity transitions
- Color transitions
- Gradient overlays with sliding animations

### Decorative Elements

**Blockquotes:**
```css
border-left: 4px solid #65bc7b;
background: #f5f5f5;
padding: 20px;
font-style: italic;
```

**Icon Circles:**
```css
border-radius: 75px; /* Perfect circle */
background: var(--icon-bg-color);
padding: 15px;
```

---

## 6. Responsive Design Approach

### Mobile-First Strategy

1. **Base Styles:** Optimized for mobile (320px–640px)
2. **Progressive Enhancement:** Add complexity at larger breakpoints
3. **Flexible Components:** Use flexbox with `flex-wrap: wrap`
4. **Adaptive Padding:** Reduce spacing on smaller screens

### Breakpoint-Specific Adjustments

**Mobile (≤640px):**
- Single-column layouts
- Stacked form fields
- Reduced padding (20px)
- Simplified navigation
- Full-width buttons

**Tablet (641px–1024px):**
- Two-column grids
- Moderate spacing
- Hybrid navigation patterns

**Desktop (≥1025px):**
- Multi-column layouts
- Full spacing (40px+)
- Advanced hover effects
- Expanded navigation

---

## 7. Brand Elements

### Logo

**File:** `bhg-logo-23-transparent.png`
**Dimensions:** 400×119px (original)
**Format:** PNG with transparency
**Usage:**
- Header navigation (scaled appropriately)
- Footer branding
- Schema.org markup for SEO

**Spacing:**
- Minimum clear space: Logo height × 0.25
- Never distort aspect ratio

### Icon System

**Custom Font Icons:**
- `BHG-Final-Icons`
- `Blue-Horizon-Group-Final-Icons`
- `BHG3`

**Icon Categories:**
- Revenue Enablement
- Revenue Insights
- Revenue Strategy
- Focus on Culture
- Navigation/UI icons

**Icon Color:** `#dc716d` (coral red) for brand consistency

### Imagery

**Style Guidelines:**
- Professional, business-focused photography
- High-quality stock images (1500px+ width)
- Consistent color grading (cool tones, professional)
- Gradient overlays for text readability

**Example Dimensions:**
- Feature images: 1500×950px
- Thumbnails: Proportional scaling
- Hero images: Full viewport width

---

## 8. Accessibility Standards

### WCAG Compliance

**Color Contrast:**
- Body text (#3c475c) on white: **AAA compliant**
- Button text (white) on primary blue (#066aab): **AA compliant**
- Ensure 4.5:1 minimum for normal text
- Ensure 3:1 minimum for large text (18px+)

### Semantic HTML

```html
<!-- Use proper heading hierarchy -->
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

<!-- Use semantic elements -->
<nav aria-label="Main Navigation">
<main>
<article>
<section>
<footer>
```

### ARIA Labels

```html
<!-- Descriptive labels for screen readers -->
<button aria-label="Submit contact form">Submit</button>
<nav aria-label="Primary navigation">
<img alt="Blue Horizons Group Logo" src="...">
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Visible focus indicators (outline or border change)
- Logical tab order
- Skip navigation links for screen readers

---

## 9. Performance Optimization

### Loading Strategy

- **Lazy Loading:** Images below the fold
- **Resource Preloading:** Critical CSS and fonts
- **NitroPack:** CDN optimization and caching
- **Minification:** CSS and JavaScript compression

### Image Optimization

- **Format:** WebP with PNG/JPG fallbacks
- **Responsive Images:** `srcset` for different screen sizes
- **Compression:** 80-85% quality for photographs
- **Dimensions:** Serve appropriately sized images

---

## 10. CSS Custom Properties (Variables)

### Theme Customization

```css
:root {
  /* Colors */
  --primary-blue: #066aab;
  --accent-coral: #dc716d;
  --text-primary: #3c475c;
  --text-secondary: #747474;
  --border-color: #d2d2d2;

  /* Typography */
  --font-family-base: 'Proxima Nova', sans-serif;
  --font-size-base: 16px;
  --meta-font-size: 14px;

  /* Spacing */
  --field-margin: 1em;
  --container-padding: 40px;

  /* Interactive */
  --link-hover-color: #cf2e2e;
  --focus-border-color: #e0284f;

  /* Effects */
  --transition-speed: 0.3s;
  --border-radius-base: 3px;
}
```

---

## 11. Implementation Guidelines

### Do's

✅ Use the defined color palette consistently
✅ Maintain generous whitespace and breathing room
✅ Follow the established typography hierarchy
✅ Ensure all components are responsive
✅ Test accessibility with screen readers
✅ Optimize images before uploading
✅ Use semantic HTML5 elements
✅ Implement smooth transitions for interactions

### Don'ts

❌ Don't introduce new colors without approval
❌ Don't use inline styles (use CSS/Tailwind)
❌ Don't skip responsive testing
❌ Don't use generic "click here" link text
❌ Don't ignore WCAG contrast requirements
❌ Don't use images for text content
❌ Don't forget alt text on images
❌ Don't create overly complex animations

---

## 12. Design Tokens for Tailwind CSS

### Color Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bhg-blue': '#066aab',
        'bhg-coral': '#dc716d',
        'bhg-deep-blue': '#3666b0',
        'bhg-text': '#3c475c',
        'bhg-gray': '#747474',
        'bhg-border': '#d2d2d2',
        'bhg-success': '#65bc7b',
        'bhg-error': '#e0284f',
        'bhg-hover': '#cf2e2e',
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
      borderRadius: {
        'bhg': '3px',
      },
      boxShadow: {
        'bhg-focus': '0 0 1.5px 1px rgba(224, 40, 79, 0.65)',
      },
    },
  },
}
```

### Usage Examples

```jsx
// Buttons
<button className="bg-bhg-blue text-white px-4 py-2 rounded-bhg hover:bg-bhg-deep-blue transition-all duration-300">
  Click Me
</button>

// Cards
<div className="border border-bhg-border rounded-bhg p-6 hover:shadow-lg transition-all">
  Card Content
</div>

// Text
<p className="text-bhg-text font-proxima">
  Body content with brand typography
</p>

// Links
<a href="#" className="text-bhg-blue hover:text-bhg-hover transition-colors">
  Read More
</a>
```

---

## 13. Component Library Reference

### Button Variants

```jsx
// Primary Button
<button className="bg-bhg-blue text-white px-4 h-[43px] rounded-bhg font-medium text-[17px] hover:bg-bhg-deep-blue transition-all duration-200">
  Primary Action
</button>

// Secondary Button
<button className="bg-transparent border border-bhg-blue text-bhg-blue px-4 h-[43px] rounded-bhg font-medium text-[17px] hover:bg-bhg-blue hover:text-white transition-all duration-200">
  Secondary Action
</button>

// Coral Accent Button
<button className="bg-bhg-coral text-white px-4 h-[43px] rounded-bhg font-medium text-[17px] hover:opacity-90 transition-all duration-200">
  Accent Action
</button>
```

### Card Components

```jsx
// Content Card
<div className="border border-[#eaeaea] border-b-[3px] rounded-bhg p-[30px_25px_20px] bg-white hover:border-bhg-blue transition-all duration-300">
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-bhg-gray">Card description content</p>
</div>

// Icon Card
<div className="border border-bhg-border rounded-bhg p-6 bg-white hover:shadow-lg transition-all duration-300">
  <div className="w-12 h-12 rounded-full bg-bhg-coral/10 flex items-center justify-center mb-4">
    <Icon className="text-bhg-coral" />
  </div>
  <h4 className="font-bold mb-2">Feature Title</h4>
  <p className="text-bhg-gray text-sm">Feature description</p>
</div>
```

### Form Components

```jsx
// Input Field
<input
  type="text"
  className="h-[43px] border border-bhg-border rounded-bhg px-4 py-2 w-full focus:outline-none focus:border-bhg-error focus:shadow-bhg-focus transition-all"
  placeholder="Enter text"
/>

// Label
<label className="block text-[16.5px] font-bold text-bhg-text mb-2">
  Field Label
</label>

// Error Message
<span className="text-bhg-error text-sm mt-1">
  This field is required
</span>
```

---

## 14. Content Guidelines

### Voice & Tone

**Brand Voice:**
- Professional yet approachable
- Expert without being condescending
- Clear and direct communication
- Solution-focused messaging

**Tone Variations:**
- **Website Copy:** Professional, authoritative, helpful
- **Blog Posts:** Informative, engaging, educational
- **CTAs:** Action-oriented, benefit-focused
- **Error Messages:** Helpful, not blaming

### Writing Style

**Headlines:**
- Clear and benefit-driven
- Front-load key information
- Use action verbs
- Keep under 60 characters for SEO

**Body Copy:**
- Short paragraphs (3-4 sentences)
- Scannable with subheadings
- Use bullet points for lists
- Active voice preferred

**CTAs:**
- Start with action verbs
- Be specific about outcomes
- Create urgency when appropriate
- Examples: "Download Guide," "Start Free Trial," "Schedule Demo"

---

## 15. Quick Reference

### Most Common Patterns

**Page Hero:**
```jsx
<section className="py-20 bg-gradient-to-br from-bhg-blue/10 to-transparent">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-5xl font-bold text-bhg-text mb-4">
      Hero Title
    </h1>
    <p className="text-xl text-bhg-gray max-w-2xl">
      Supporting description text
    </p>
  </div>
</section>
```

**Feature Grid:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map(feature => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</div>
```

**Content Section:**
```jsx
<section className="py-16 bg-[#f2f2f2]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-bhg-text mb-8">
      Section Title
    </h2>
    {/* Content */}
  </div>
</section>
```

---

## Appendix: Resources

**Design Assets:**
- Logo files: `/public/logo.png`, `/public/apple-icon.png`
- Icon fonts: BHG custom icon sets
- Image library: Professional stock photography

**External References:**
- Main Website: https://bluehorizonsgroup.com/
- Documentation: https://bluehorizonsgroup.mintlify.app/
- GitHub: https://github.com/AICodeRally

**Tools:**
- Font: Proxima Nova (licensed)
- Performance: NitroPack
- Icons: Custom BHG icon fonts

---

**Document Maintenance:**
- Review quarterly for design evolution
- Update with new component patterns
- Document any design system changes
- Keep accessibility guidelines current
