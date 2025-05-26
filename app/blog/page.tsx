"use client"

import { useState } from "react"
import { blogPosts } from "@/data/posts"
import BlogCard from "@/components/blog-card"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle")

  const categories = ["Alle", ...Array.from(new Set(blogPosts.map((post) => post.category)))]

  const filteredPosts =
    selectedCategory === "Alle" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Alle Artikelen</h1>
          <p className="text-xl text-gray-600">
            Ontdek onze collectie artikelen over bordspellen, digitale games en gaming cultuur.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Geen artikelen gevonden in deze categorie.</p>
          </div>
        )}
      </div>
    </main>
  )
}
