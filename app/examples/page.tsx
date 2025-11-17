"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedList } from "@/components/ui/animated-list"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

interface Notification {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

const notifications: Notification[] = [
  {
    name: "Component Added",
    description: "Successfully added animated-gradient-text",
    time: "2m ago",
    icon: "✨",
    color: "#00C9A7",
  },
  {
    name: "Build Complete",
    description: "Project built successfully",
    time: "5m ago",
    icon: "✅",
    color: "#FFB800",
  },
  {
    name: "New Feature",
    description: "Documentation page created",
    time: "10m ago",
    icon: "📚",
    color: "#FF3D71",
  },
  {
    name: "Deployment",
    description: "Ready for Vercel deployment",
    time: "15m ago",
    icon: "🚀",
    color: "#1E86FF",
  },
]

const NotificationCard = ({ name, description, icon, color, time }: Notification) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export default function ExamplesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-20">
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
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge className="mb-4" variant="outline">
            Interactive Examples
          </Badge>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Component
            <br />
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="text-5xl font-bold tracking-tight sm:text-6xl"
            >
              Showcase
            </AnimatedGradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Explore interactive components from the 60+ registries available in this template
          </p>
        </div>
      </section>

      {/* Animated List Example */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Animated List Component</CardTitle>
            <CardDescription>
              From @magicui - A list that animates each item in sequence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border p-2">
              <AnimatedList>
                {notifications.map((item, idx) => (
                  <NotificationCard {...item} key={idx} />
                ))}
              </AnimatedList>
              <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gradient Text Examples */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Animated Gradient Text
          </h2>
          <p className="text-muted-foreground">
            Multiple examples of animated gradient text from @magicui
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Default Gradient</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <AnimatedGradientText className="text-4xl font-bold">
                Magic UI
              </AnimatedGradientText>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Colors</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <AnimatedGradientText
                speed={2}
                colorFrom="#4ade80"
                colorTo="#06b6d4"
                className="text-4xl font-bold"
              >
                Fast Gradient
              </AnimatedGradientText>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grid Pattern Examples */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Animated Grid Pattern
          </h2>
          <p className="text-muted-foreground">
            Background patterns with animated squares
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Default Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border">
                <AnimatedGridPattern
                  numSquares={30}
                  maxOpacity={0.1}
                  duration={3}
                  repeatDelay={1}
                />
                <div className="relative z-10 text-center">
                  <p className="text-sm text-muted-foreground">Animated Background</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border">
                <AnimatedGridPattern
                  numSquares={50}
                  maxOpacity={0.2}
                  duration={2}
                  repeatDelay={0.5}
                  className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                  )}
                />
                <div className="relative z-10 text-center">
                  <p className="text-sm text-muted-foreground">Radial Mask</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Registry Info */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Available Component Registries</CardTitle>
            <CardDescription>
              Explore components from 60+ registries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "@shadcn", desc: "Core UI components" },
                { name: "@magicui", desc: "Advanced animations" },
                { name: "@aceternity", desc: "Premium components" },
                { name: "@supabase", desc: "Supabase integration" },
                { name: "@formcn", desc: "Form components" },
                { name: "@assistant-ui", desc: "AI interfaces" },
                { name: "@commercn", desc: "E-commerce" },
                { name: "@billingsdk", desc: "Billing & payments" },
                { name: "@blocks", desc: "Page sections" },
              ].map((registry) => (
                <div
                  key={registry.name}
                  className="rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <Badge className="mb-2" variant="secondary">
                    {registry.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{registry.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

