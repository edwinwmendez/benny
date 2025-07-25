# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for "Producciones Benny" - an event planning and production company website. The project is built with modern React/Next.js architecture and uses the shadcn/ui component library with Tailwind CSS for styling.

## Key Technologies and Dependencies

- **Framework**: Next.js 15 with React 19
- **TypeScript**: Full TypeScript setup
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Icons**: Lucide React icons
- **Font**: Geist Sans and Geist Mono fonts
- **Package Manager**: pnpm (evidenced by pnpm-lock.yaml)

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page component (main landing page)
│   └── modeloReactNext.md # Component model/template
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configuration
│   └── utils.ts          # Utility functions (cn, etc.)
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## Architecture Notes

### Component Architecture
- The main application is a single-page landing site in `app/page.tsx`
- Uses a comprehensive component structure with multiple sections:
  - Hero section with animated elements
  - Services showcase with pricing
  - Image gallery with filtering
  - Testimonials
  - Contact form

### State Management
- Uses React useState for local component state
- Manages scroll position, menu state, gallery filters, and modal state
- No external state management library (Redux, Zustand, etc.)

### Styling Approach
- Tailwind CSS with extensive use of gradient backgrounds
- Custom color scheme with pink, purple, yellow, and other vibrant colors
- Responsive design with mobile-first approach
- Heavy use of hover effects and animations
- CSS variables for theming defined in globals.css

### UI Components
- shadcn/ui components are pre-configured and customized
- Components follow consistent design patterns
- Extensive use of Radix UI primitives for accessibility

## shadcn/ui Configuration

The project uses shadcn/ui with the following configuration (from `components.json`):
- Style: default
- RSC: enabled
- TypeScript: enabled
- Tailwind config: `tailwind.config.ts`
- CSS file: `app/globals.css`
- Base color: neutral
- CSS variables: enabled
- Icon library: lucide

## Path Aliases

The project uses TypeScript path mapping:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`

## Development Guidelines

### Adding New Components
- Follow the existing shadcn/ui pattern
- Place reusable components in `components/ui/`
- Use the established color schemes and design patterns
- Maintain responsive design principles

### Styling Guidelines
- Use Tailwind utility classes
- Follow the established gradient and color patterns
- Maintain consistency with existing hover effects and transitions
- Use the predefined CSS variables for theming

### Image Handling
- Uses Next.js Image component for optimization
- Currently uses Unsplash images as placeholders
- Images are located in the `public/` directory for local assets

## Key Features to Maintain

1. **Responsive Navigation**: Fixed header with mobile hamburger menu
2. **Animated Elements**: Floating decorative elements and hover effects
3. **Gallery Filtering**: Dynamic image filtering by event type
4. **Modal System**: Image lightbox functionality
5. **Form Handling**: Contact form (currently frontend-only)
6. **Smooth Scrolling**: Anchor-based navigation between sections

## Common Development Tasks

When working with this codebase:
- Test responsiveness across different screen sizes
- Ensure all animations and hover effects work smoothly
- Verify image loading and modal functionality
- Check that all navigation links work correctly
- Maintain the vibrant, celebratory design aesthetic