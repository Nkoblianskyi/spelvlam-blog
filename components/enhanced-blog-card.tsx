"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import type { BlogPost } from "@/types"
import { Calendar, User, ArrowRight, BookOpen, Clock } from "lucide-react"

interface EnhancedBlogCardProps {
  post: BlogPost
  index?: number
}

export default function EnhancedBlogCard({ post, index = 0 }: EnhancedBlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article
      className="group bg-white rounded-2xl shadow-md overflow-hidden card-enhanced hover-lift focus-ring animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && <div className="absolute inset-0 skeleton rounded-t-2xl"></div>}
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Floating category badge */}
        <div
          className={`absolute top-4 left-4 transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"
          }`}
        >
          <span className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
            {post.category}
          </span>
        </div>

        {/* Reading time indicator */}
        <div
          className={`absolute top-4 right-4 transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>5 min</span>
          </div>
        </div>
      </div>

      <div className="p-6 relative">
        {/* Date and author info */}
        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {post.author}
          </div>
        </div>

        <h3
          className={`text-xl font-serif font-semibold text-gray-900 mb-3 line-clamp-2 transition-colors duration-200 ${
            isHovered ? "text-primary" : ""
          }`}
        >
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{post.preview}</p>

        {/* Enhanced CTA */}
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="group/btn btn-enhanced bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 focus-ring"
          >
            <BookOpen className="h-4 w-4" />
            <span>Lees artikel</span>
            <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
          </Link>

          {/* Engagement indicators */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Trending</span>
            </div>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </article>
  )
}
