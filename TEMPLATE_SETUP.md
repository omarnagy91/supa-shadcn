# Template Setup Guide

This guide helps you set up this template repository for use as a starting point for new projects.

## Making This a Template Repository

### On GitHub

1. **Push this repository to GitHub**
2. **Go to repository Settings**
3. **Scroll to "Template repository" section**
4. **Check "Template repository"**
5. **Save changes**

Now others can use "Use this template" button to create new repositories from this template.

## Initial Setup for New Projects

When creating a new project from this template:

### 1. Clone the Template

```bash
# Using GitHub template
# Click "Use this template" on GitHub, then:
git clone <your-new-repo-url> my-project
cd my-project
```

### 2. Update Project Information

- **Update `package.json`**:
  - Change `name` to your project name
  - Update `version` if needed
  - Update `description` if present

- **Update `README.md`**:
  - Replace template information with your project details
  - Update features list
  - Add project-specific documentation

### 3. Set Up Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your-supabase-anon-key
```

### 4. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 5. Initialize Supabase

If using Supabase CLI:
```bash
npx supabase init
npx supabase start  # For local development
```

### 6. Generate Types

```bash
# For local Supabase
npx supabase gen types typescript --local > types/supabase.ts

# For hosted Supabase
npx supabase gen types typescript --project-id <project-id> > types/supabase.ts
```

### 7. Customize Configuration

- **Update `components.json`** if you want different shadcn settings
- **Modify `.cursorrules`** with project-specific guidelines
- **Update `tsconfig.json`** if needed

### 8. Start Development

```bash
pnpm dev
# or
npm run dev
```

## Customization Checklist

- [ ] Update `package.json` name and version
- [ ] Update `README.md` with project details
- [ ] Set up environment variables
- [ ] Initialize Supabase project
- [ ] Generate TypeScript types
- [ ] Customize `.cursorrules` if needed
- [ ] Update project structure as needed
- [ ] Remove template-specific files if any
- [ ] Add project-specific documentation

## Template-Specific Files

These files are template-specific and should be reviewed/customized:

- `README.md` - Project documentation
- `.cursorrules` - AI assistant rules
- `.cursor/rules/*.mdc` - Specific coding rules
- `.aiderrc` - Aider configuration
- `TEMPLATE_SETUP.md` - This file (can be removed after setup)

## Best Practices

1. **Keep the structure** - The project structure is optimized for AI assistants
2. **Maintain rules** - Keep `.cursor/rules/` updated with project patterns
3. **Document changes** - Update README when adding major features
4. **Version control** - Commit frequently with descriptive messages
5. **Test builds** - Ensure project builds before committing

## AI Assistant Configuration

This template is pre-configured for:
- **Cursor IDE** - Rules in `.cursor/rules/` and `.cursorrules`
- **Aider** - Configuration in `.aiderrc`
- **Other assistants** - Can use `.cursorrules` as reference

The AI assistants will automatically:
- Understand project structure
- Know available component registries
- Follow Supabase best practices
- Use proper TypeScript patterns
- Select appropriate components

## Next Steps

1. **Set up your Supabase project**
2. **Create your first migration**
3. **Add your first component**
4. **Start building features!**

For more information, see:
- `README.md` - Project overview
- `.cursorrules` - AI assistant guidelines
- `.cursor/rules/` - Specific coding rules

