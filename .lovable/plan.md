

# WhatsAuto AI — Landing Page Plan

## Design Direction
- **Primary**: WhatsApp green `#25D366`, **Accent**: `#128C7E`, **Dark**: `#075E54`
- **Typography**: Inter/Plus Jakarta Sans — clean, modern SaaS feel
- **Style**: Soft shadows, rounded corners (16px), generous whitespace, glassmorphism touches
- **Animations**: Scroll-triggered fade-ins, floating phone mockup, counter animations, hover effects on cards

## Page Structure (Single Page)

### 1. Navigation Bar
- Logo "WhatsAuto AI" with a chat bubble icon
- Links: Features, How It Works, Pricing, Testimonials
- CTA button: "Start Free Trial"
- Sticky on scroll with backdrop blur

### 2. Hero Section
- Bold headline + subheadline as specified
- Two CTA buttons with hover animations
- Right side: animated phone mockup with fake WhatsApp chat bubbles appearing one by one (CSS animation)
- Subtle gradient background with floating green dots/circles

### 3. Trusted By (Logo Bar)
- "Trusted by 500+ businesses" with placeholder brand logos
- Adds credibility right below the hero

### 4. How It Works (3 Steps)
- Horizontal 3-step flow with numbered circles, icons, and connecting lines
- Each step has icon + title + description as specified
- Scroll-triggered stagger animation

### 5. Features Section (6 Cards)
- 2x3 grid of feature cards with icons
- AI replies, Smart FAQ, Real-time responses, Conversation history, Multi-business, No-code setup
- Cards with hover lift effect and green accent borders

### 6. Benefits Section
- Split layout: left side with benefit list (checkmarks + text), right side with illustration/stats
- Animated counters: "10,000+ messages handled", "99% response rate", "5min avg setup"

### 7. Demo/Preview Section
- Interactive chat preview showing customer question → AI response
- Styled like WhatsApp but clearly a demo
- Auto-typing animation effect

### 8. Pricing Section (3 Tiers)
- Starter ($29/mo), Pro ($79/mo), Business ($149/mo)
- Feature comparison with checkmarks
- "Most Popular" badge on Pro tier
- CTA on each card

### 9. Testimonials
- 3 testimonial cards with avatar, name, business type, quote
- Bakery owner, salon owner, online shop owner
- Star ratings, subtle card design

### 10. Final CTA Section
- Full-width green gradient banner
- "Start automating your WhatsApp today"
- Large "Get Started" button

### 11. Footer
- 3-column layout: Brand info, Links, Contact
- Social icons, copyright
- Clean and minimal

## Technical Approach
- All built in `src/pages/Index.tsx` with extracted components
- Intersection Observer for scroll animations
- CSS keyframe animations for the chat mockup
- Fully responsive with mobile-first Tailwind classes
- Smooth scroll navigation between sections

