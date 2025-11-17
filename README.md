# Supa-Shadcn Template

A production-ready template repository for building modern web applications with **Next.js**, **Supabase**, and **shadcn/ui**. This template is optimized for rapid development with AI coding assistants and includes 60+ component registries.

## 🚀 Features

- **Next.js 16** with App Router and React 19
- **Supabase** integration (Auth, Database, Storage, Realtime, Edge Functions)
- **shadcn/ui** with 60+ component registries pre-configured
- **Tailwind CSS 4** with CSS variables for theming
- **TypeScript** with strict type checking
- **Lucide React** icons
- **AI Assistant Optimized** - Comprehensive rules and guidelines for AI coding

## 📦 Component Registries

This template includes 60+ component registries, including:

- **Core**: `@shadcn` (default)
- **Animations**: `@magicui`, `@aceternity`, `@motion-primitives`, `@animate-ui`
- **Forms**: `@formcn`
- **AI/Chat**: `@assistant-ui`, `@ai-elements`, `@prompt-kit`
- **Supabase**: `@supabase`
- **Commerce**: `@commercn`, `@billingsdk`, `@paykit-sdk`
- **Specialized**: `@clerk`, `@algolia`, `@plate`, `@prosekit`, `@nuqs`, `@better-upload`
- **And 50+ more!**

See `components.json` for the complete list.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn
- Supabase account (for backend services)

### Installation

1. **Clone this template**:
   ```bash
   git clone https://github.com/omarnagy91/supa-shadcn my-project
   cd my-project
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   └── ui/               # shadcn/ui components (auto-generated)
├── lib/                   # Utilities and configurations
│   ├── client.ts         # Supabase browser client
│   ├── server.ts         # Supabase server client
│   ├── middleware.ts     # Supabase middleware
│   └── utils.ts          # Utility functions
├── .cursor/               # AI assistant rules
│   └── rules/           # Coding guidelines
├── components.json        # shadcn/ui configuration
└── package.json          # Dependencies
```

## 🎨 Adding Components

### Search and Add Components

```bash
# Search across all registries
npx shadcn@latest add <component-name>

# Add from specific registry
npx shadcn@latest add @magicui/animated-gradient
npx shadcn@latest add @supabase/auth-form
```

### Component Selection Guide

- **Basic UI**: Use `@shadcn` (default)
- **Animations**: Check `@magicui`, `@aceternity`, `@motion-primitives`
- **Forms**: Check `@formcn`, `@shadcn`
- **AI Features**: Check `@assistant-ui`, `@ai-elements`
- **Supabase**: Check `@supabase`
- **Commerce**: Check `@commercn`, `@billingsdk`

See `.cursor/rules/component-registry-guide.mdc` for detailed guidance.

## 🔧 Supabase Setup

### Database

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Add them to `.env.local`

### Migrations

Create migrations in `supabase/migrations/`:
```bash
npx supabase migration new <migration-name>
```

### Type Generation

Generate TypeScript types from your database:
```bash
npx supabase gen types typescript --local > types/supabase.ts
# or for hosted
npx supabase gen types typescript --project-id <project-id> > types/supabase.ts
```

## 🤖 AI Assistant Support

This template is optimized for AI coding assistants:

- **Cursor IDE**: Rules in `.cursor/rules/` and `.cursorrules`
- **Aider**: Configuration in `.aiderrc`
- **Comprehensive guidelines** for component selection, Supabase patterns, and coding standards

### For AI Assistants

When working with this template:
1. Check `.cursorrules` for project context and guidelines
2. Review `.cursor/rules/` for specific patterns (Supabase, SQL, etc.)
3. Use `.cursor/rules/component-registry-guide.mdc` for component selection
4. Follow existing code patterns and structure

## 📚 Documentation

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎯 Coding Guidelines

### TypeScript
- Use strict TypeScript
- Prefer explicit types over `any`
- Generate Supabase types regularly

### React/Next.js
- Use Server Components by default
- Add `'use client'` only when needed
- Follow App Router conventions

### Styling
- Use Tailwind utility classes
- Use CSS variables for theming
- Follow shadcn/ui patterns

### Database
- Follow SQL style guide (`.cursor/rules/postgres-sql-style-guide.mdc`)
- Use RLS policies for security (`.cursor/rules/create-rls-policies.mdc`)
- Follow migration guidelines (`.cursor/rules/create-migration.mdc`)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- Railway
- Render
- Any platform supporting Next.js

## 📝 License

This template is open source and available for use in your projects.

## 🤝 Contributing

This is a template repository. When using it:
1. Create your own repository from this template
2. Customize for your needs
3. Build amazing things!

## 💡 Tips

- **Always ensure the project builds** before considering tasks complete
- **Static generation errors** related to missing Supabase env vars are expected in development
- **Use pnpm** as the preferred package manager
- **Check component registries** before building custom components
- **Follow existing patterns** for consistency

---

Built with ❤️ for rapid development and AI-assisted coding
