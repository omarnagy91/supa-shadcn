import Link from "next/link"
import { Github, Sparkles, Database, Zap, Code, Rocket, CheckCircle2, User, Globe, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <Badge className="mb-4" variant="outline">
            <Sparkles className="mr-2 h-3 w-3" />
            AI-Optimized Template
          </Badge>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Build Modern Web Apps with
            <br />
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            >
              Next.js + Supabase + shadcn/ui
            </AnimatedGradientText>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A production-ready template with 60+ component registries, optimized for rapid development 
            with AI coding assistants. Perfect for "vibe coding" and building beautiful applications.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="https://github.com/omarnagy91/supa-shadcn">
                <Github className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/docs">
                View Documentation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/examples">
                See Examples
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4" variant="secondary">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Build Fast
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pre-configured with the best tools and components for modern web development
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>60+ Component Registries</CardTitle>
                <CardDescription>
                  Access to shadcn/ui, Magic UI, Aceternity, and 50+ more registries. 
                  Find the perfect component for any use case.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Supabase Integration</CardTitle>
                <CardDescription>
                  Full-stack backend with PostgreSQL, Auth, Storage, Realtime, 
                  and Edge Functions. Production-ready from day one.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Optimized</CardTitle>
                <CardDescription>
                  Comprehensive rules and guidelines for AI coding assistants. 
                  Perfect for Cursor, Aider, and other AI tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Next.js 16 + React 19</CardTitle>
                <CardDescription>
                  Latest App Router with Server Components, streaming, and 
                  all the modern React features you need.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tailwind CSS 4</CardTitle>
                <CardDescription>
                  Modern styling with CSS variables, dark mode support, 
                  and a beautiful design system out of the box.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>TypeScript Ready</CardTitle>
                <CardDescription>
                  Full TypeScript support with strict mode, Supabase type generation, 
                  and comprehensive type definitions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative border-t bg-muted/50 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built with Modern Tech
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Carefully selected technologies for the best developer experience
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Next.js 16 (App Router)",
              "React 19",
              "TypeScript",
              "Supabase",
              "Tailwind CSS 4",
              "shadcn/ui",
              "Lucide Icons",
              "60+ Component Registries",
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 rounded-lg border bg-background p-4"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2">
            <CardHeader className="text-center">
              <Badge className="mb-4 mx-auto w-fit" variant="secondary">
                About the Creator
              </Badge>
              <CardTitle className="text-3xl">Omar Nagy</CardTitle>
              <CardDescription className="text-base">
                Full-stack developer passionate about building modern web applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">
                This template was created to streamline the development process for modern web applications. 
                It combines the best tools and practices to help developers build faster and better.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild variant="outline">
                  <Link href="/about">
                    <User className="mr-2 h-4 w-4" />
                    Learn More
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://omargnagy.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Portfolio
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://linkedin.com/in/omargnagy" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/omarnagy91" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t bg-primary/5 py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Building?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Clone the template and start building your next project in minutes
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="https://github.com/omarnagy91/supa-shadcn">
                <Github className="mr-2 h-4 w-4" />
                Get Started on GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com/omarnagy91/supa-shadcn#readme">
                Read the Docs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>
            Built with ❤️ by{" "}
            <Link
              href="https://github.com/omarnagy91"
              className="font-medium text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Omar Nagy
            </Link>
          </p>
          <p className="mt-2">
            Template available on{" "}
            <Link
              href="https://github.com/omarnagy91/supa-shadcn"
              className="font-medium text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
