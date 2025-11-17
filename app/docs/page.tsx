import { BookOpen, Code, Database, Zap, Sparkles, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function DocsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <Badge className="mb-4" variant="secondary">
          Documentation
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Getting Started
        </h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to using the Supa-Shadcn template
        </p>
      </div>

      <Tabs defaultValue="installation" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="supabase">Supabase</TabsTrigger>
          <TabsTrigger value="ai">AI Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="installation" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Installation
              </CardTitle>
              <CardDescription>
                Get started with the template in minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">1. Clone the Repository</h3>
                <pre className="rounded-lg bg-muted p-4">
                  <code>git clone https://github.com/omarnagy91/supa-shadcn my-project</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">2. Install Dependencies</h3>
                <pre className="rounded-lg bg-muted p-4">
                  <code>pnpm install</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">3. Set Up Environment Variables</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Create a <code className="rounded bg-muted px-1 py-0.5">.env.local</code> file:
                </p>
                <pre className="rounded-lg bg-muted p-4">
                  <code>{`NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your-anon-key`}</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">4. Run Development Server</h3>
                <pre className="rounded-lg bg-muted p-4">
                  <code>pnpm dev</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Component System
              </CardTitle>
              <CardDescription>
                Using the 60+ component registries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Adding Components</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Search across all registries and add components with a single command:
                </p>
                <pre className="rounded-lg bg-muted p-4">
                  <code>npx shadcn@latest add &lt;component-name&gt;</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Registry-Specific Components</h3>
                <pre className="rounded-lg bg-muted p-4">
                  <code>{`# From Magic UI
npx shadcn@latest add @magicui/animated-gradient-text

# From Supabase
npx shadcn@latest add @supabase/auth-form

# From other registries
npx shadcn@latest add @registry/component-name`}</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Available Registries</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "@shadcn - Core UI components",
                    "@magicui - Advanced animations",
                    "@aceternity - Premium components",
                    "@supabase - Supabase integration",
                    "@formcn - Form components",
                    "@assistant-ui - AI interfaces",
                    "@commercn - E-commerce",
                    "@billingsdk - Billing & payments",
                  ].map((registry) => (
                    <div key={registry} className="flex items-center gap-2 rounded-lg border p-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{registry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="supabase" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Supabase Integration
              </CardTitle>
              <CardDescription>
                Setting up and using Supabase features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Client Setup</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Use the pre-configured clients for browser and server:
                </p>
                <pre className="rounded-lg bg-muted p-4">
                  <code>{`// Browser (Client Components)
import { createClient } from '@/lib/client'
const supabase = createClient()

// Server (Server Components)
import { createClient } from '@/lib/server'
const supabase = await createClient()`}</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Database Migrations</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Create migrations following the naming convention:
                </p>
                <pre className="rounded-lg bg-muted p-4">
                  <code>{`# Format: YYYYMMDDHHmmss_description.sql
npx supabase migration new create_users_table`}</code>
                </pre>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Type Generation</h3>
                <pre className="rounded-lg bg-muted p-4">
                  <code>{`# Local development
npx supabase gen types typescript --local > types/supabase.ts

# Hosted project
npx supabase gen types typescript --project-id <id> > types/supabase.ts`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                AI Assistant Configuration
              </CardTitle>
              <CardDescription>
                Optimized for AI coding assistants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Cursor IDE</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  This template includes comprehensive rules in <code className="rounded bg-muted px-1 py-0.5">.cursorrules</code> and <code className="rounded bg-muted px-1 py-0.5">.cursor/rules/</code> for optimal AI assistance.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Component Selection</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  AI assistants are configured to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm">
                  <li>Understand all 60+ component registries</li>
                  <li>Select appropriate components for use cases</li>
                  <li>Follow project structure and naming conventions</li>
                  <li>Use Supabase best practices</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Available Rules</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Component Registry Guide",
                    "Project Structure",
                    "Coding Standards",
                    "Supabase Migrations",
                    "RLS Policies",
                    "Database Functions",
                    "Realtime Patterns",
                    "Edge Functions",
                  ].map((rule) => (
                    <div key={rule} className="flex items-center gap-2 rounded-lg border p-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

