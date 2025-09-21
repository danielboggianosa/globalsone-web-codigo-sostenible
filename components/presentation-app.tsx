"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Menu } from "lucide-react"
import { slides } from "@/lib/slides-data"
import { SlideNavigation } from "@/components/slide-navigation"
import { SlideContent } from "@/components/slide-content"

export function PresentationApp() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNavigation, setShowNavigation] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setShowNavigation(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNavigation(!showNavigation)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold">Código Sostenible</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSlide(0)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Home className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Sidebar */}
      {showNavigation && (
        <SlideNavigation
          slides={slides}
          currentSlide={currentSlide}
          onSlideSelect={goToSlide}
          onClose={() => setShowNavigation(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <SlideContent slide={slides[currentSlide]} />
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          <div className="flex items-center gap-2 overflow-x-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-transparent"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
