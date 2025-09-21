"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import type { Slide } from "@/lib/slides-data"

interface SlideNavigationProps {
  slides: Slide[]
  currentSlide: number
  onSlideSelect: (index: number) => void
  onClose: () => void
}

export function SlideNavigation({ slides, currentSlide, onSlideSelect, onClose }: SlideNavigationProps) {
  return (
    <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="fixed left-0 top-0 h-full w-80 bg-card border-r border-border shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">Navegación</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          {slides.map((slide, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-colors hover:bg-accent ${
                index === currentSlide ? "bg-accent border-primary" : ""
              }`}
              onClick={() => onSlideSelect(index)}
            >
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{slide.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{slide.subtitle || slide.type}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
