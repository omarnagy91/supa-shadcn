import Link from "next/link"
import { Github, Linkedin, Globe, Mail, Code, Database, Zap, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          About the Creator
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Omar Nagy
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Full-stack developer passionate about building modern web applications 
          and creating tools that help developers build faster and better.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/omarnagy91.png" alt="Omar Nagy" />
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Omar Nagy</CardTitle>
                <CardDescription>Full-Stack Developer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              I'm a developer who loves creating modern web applications using the latest 
              technologies. This template represents my approach to rapid development with 
              AI assistance and best practices.
            </p>
            
            <Separator />
            
            <div>
              <h3 className="mb-3 text-sm font-semibold">Connect with me</h3>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://omargnagy.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Portfolio
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://linkedin.com/in/omargnagy" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com/omarnagy91" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Expertise */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
            <CardDescription>
              Technologies and tools I work with
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Code className="h-4 w-4" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Database className="h-4 w-4" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Supabase", "PostgreSQL", "Node.js", "Edge Functions"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Zap className="h-4 w-4" />
                Tools & Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AI Coding", "Git", "Vercel", "Docker"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About the Template */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            About This Template
          </CardTitle>
          <CardDescription>
            Why I created this template
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This template was born from my experience building modern web applications. 
            I noticed that every new project required the same setup: Next.js, Supabase, 
            shadcn/ui, and configuration for AI coding assistants.
          </p>
          <p className="text-sm text-muted-foreground">
            Instead of starting from scratch each time, I created this comprehensive 
            template that includes:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            <li>Pre-configured Next.js 16 with App Router</li>
            <li>Supabase integration with best practices</li>
            <li>60+ component registries ready to use</li>
            <li>Comprehensive AI assistant rules and guidelines</li>
            <li>Production-ready patterns and structure</li>
            <li>Beautiful landing page and documentation</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            My goal is to help developers build faster and focus on what matters: 
            creating amazing features and experiences.
          </p>
        </CardContent>
      </Card>

      {/* Projects & Links */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Projects & Resources</CardTitle>
          <CardDescription>
            Check out my work and contributions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Template Repository</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                This template is open source and available on GitHub
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="https://github.com/omarnagy91/supa-shadcn" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Portfolio Website</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Visit my portfolio to see more of my work
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="https://omargnagy.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

