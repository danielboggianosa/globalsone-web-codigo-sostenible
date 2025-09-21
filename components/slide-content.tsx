"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Slide } from "@/lib/slides-data"

interface SlideContentProps {
  slide: Slide
}

export function SlideContent({ slide }: SlideContentProps) {
  if (slide.type === "title") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center u-gradient-hero text-primary-foreground rounded-lg">
        <div className="text-center space-y-6 px-8">
          <img
            src={slide.image || "/placeholder.jpg"}
            alt="Código Sostenible"
            className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-primary-foreground/20"
          />
          <h1 className="text-5xl font-bold text-balance">{slide.title}</h1>
          {slide.subtitle && (
            <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto">{slide.subtitle}</p>
          )}
          {slide.footer && (
            <p className="text-sm text-primary-foreground/80 text-pretty max-w-2xl mx-auto">{slide.footer}</p>
          )}
        </div>
      </div>
    )
  }

  if (slide.type === "chapter") {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <img
            src={slide.image || "/placeholder.jpg"}
            alt={slide.title}
            className="mx-auto w-24 h-24 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold text-primary text-balance">{slide.title}</h1>
          {slide.subtitle && (
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">{slide.subtitle}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {slide.content?.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
                {item.points && (
                  <ul className="mt-3 space-y-1">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (slide.type === "content") {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <img
            src={slide.image || "/placeholder.jpg"}
            alt={slide.title}
            className="mx-auto w-20 h-20 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold text-primary text-balance">{slide.title}</h1>
          {slide.subtitle && (
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{slide.subtitle}</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {slide.content?.map((section, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-sm">
                    {index + 1}
                  </Badge>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{section.description}</p>
                {section.points && (
                  <div className="grid gap-3 md:grid-cols-2">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {pointIndex + 1}
                        </div>
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return null
}
