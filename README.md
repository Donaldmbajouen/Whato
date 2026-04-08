# 🤖 Whato — WhatsApp Automation with AI

Automate your WhatsApp customer support with intelligent AI-powered responses. Respond to customers 24/7, increase sales, and save hours every day—all without lifting a finger.

## ✨ Features

- **AI-Powered Responses** — Gemini AI understands your business context and generates natural, customized replies
- **Smart FAQ System** — Pre-configure answers to frequently asked questions for instant responses
- **Real-Time Replies** — Answer customers in seconds, not hours
- **Conversation History** — Complete logs and analytics to track every interaction
- **Multi-Business Support** — Manage multiple WhatsApp numbers from a single dashboard
- **No-Code Setup** — Configure in minutes with our intuitive interface—no developers needed

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Bun (package manager)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd whato

# Install dependencies
bun install

# Start development server
bun run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── landing/
│   │   ├── Navbar.tsx          # Navigation with active link detection
│   │   ├── HeroSection.tsx      # Main hero section with CTA
│   │   ├── HowItWorks.tsx       # 3-step process explanation
│   │   ├── Features.tsx         # 6 key features showcase
│   │   ├── Benefits.tsx         # Benefits with animated stats
│   │   ├── DemoSection.tsx      # Interactive chat demo
│   │   ├── Pricing.tsx          # Pricing plans
│   │   ├── Testimonials.tsx     # Customer testimonials
│   │   ├── FinalCTA.tsx         # Final call-to-action
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── TrustedBy.tsx        # Logo bar of trusted brands
│   │   ├── ChatMockup.tsx       # Animated chat interface
│   │   └── DemoSection.tsx      # Live demo section
│   └── ui/                      # shadcn/ui components
├── pages/
│   └── Index.tsx                # Main landing page
├── hooks/
│   └── useScrollAnimation.tsx    # Scroll trigger animations
└── main.tsx                      # App entry point
```

## 🎨 Design & Styling

- **Framework:** React 18 + TypeScript
- **UI Components:** shadcn/ui (Radix UI)
- **Styling:** Tailwind CSS with custom animations
- **Icons:** Lucide React
- **Colors:** WhatsApp green palette (#25D366, #128C7E, #075E54)

## 🔧 Tech Stack

- ⚛️ **React 18** — Modern UI library
- 🎯 **TypeScript** — Type safety
- ⚡ **Vite** — Lightning-fast build tool
- 🎪 **Tailwind CSS** — Utility-first CSS framework
- 🎨 **shadcn/ui** — Beautiful component library
- 📠 **React Hook Form** — Efficient form handling
- 🔄 **TanStack React Query** — Data fetching & caching
- 📊 **Recharts** — Data visualization
- 🧪 **Vitest** — Unit testing framework
- 🎭 **Playwright** — E2E testing

## 📱 Responsive Design

The landing page is fully responsive with optimized layouts for:
- 📲 Mobile (320px+)
- 📱 Tablet (640px+)
- 💻 Desktop (1024px+)

## 🎬 Features Overview

### Navigation
- Fixed sticky navbar with active section highlighting
- Mobile-friendly hamburger menu
- Smooth scrolling to sections

### Hero Section
- Dynamic background with animated floating shapes
- Animated phone mockup showing chat bubbles
- Dual CTA buttons + social proof

### How It Works
- 3-step visual process flow
- Scroll-triggered animations
- Connecting lines between steps

### Features
- 6-card grid layout
- Hover lift effects
- Icon + description for each feature

### Pricing
- 3 pricing tiers
- Popular plan highlighting
- Disabled "coming soon" plans

### Testimonials
- 3 customer testimonials
- Star ratings
- Avatar display with names/roles

### Demo Section
- Interactive chat mockup
- AI vs User message distinction
- Typing animation

## ⚙️ Configuration

### Environment Variables
```env
# Add your environment variables here if needed
```

### Tailwind Customization
Edit `tailwind.config.ts` to modify colors, fonts, and breakpoints.

### Component Updates
- Update nav links in `Navbar.tsx`
- Modify pricing plans in `Pricing.tsx`
- Update testimonials in `Testimonials.tsx`
- Customize feature cards in `Features.tsx`

## 🧪 Testing

### Run Unit Tests
```bash
bun run test
```

### Watch Mode
```bash
bun run test:watch
```

### Run E2E Tests with Playwright
```bash
bun run playwright
```

## 📊 Performance

- ✅ Optimized images and assets
- ✅ Lazy loading for sections
- ✅ Minimal JavaScript bundle
- ✅ CSS animations for smooth 60 FPS
- ✅ Responsive images with proper sizing

## 🌐 SEO

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags ready
- Mobile-first approach
- Fast page load times

## 🚀 Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "preview"]
```

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email hello@whato.ai or open an issue on GitHub.

---

**Made with ❤️ by the Whato team**
