"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, BookOpen, Sparkles, User, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/docs", label: "Documentation", icon: BookOpen },
  { href: "/examples", label: "Examples", icon: Sparkles },
  { href: "/about", label: "About", icon: User },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5" />
          <span className="font-bold">Supa-Shadcn</span>
        </Link>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            )
          })}
          
          <Button asChild size="sm" variant="outline" className="ml-4">
            <Link href="https://github.com/omarnagy91/supa-shadcn" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

