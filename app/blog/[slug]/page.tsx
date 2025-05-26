import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/posts"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Artikel niet gevonden - SpelVlam Blog",
    }
  }

  return {
    title: `${post.title} - SpelVlam Blog`,
    description: post.preview,
    openGraph: {
      title: post.title,
      description: post.preview,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-orange-600 hover:text-orange-700">
            ← Terug naar artikelen
          </Link>
        </nav>

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded">
                {post.category}
              </span>
              <span className="text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.preview}</p>
            <div className="flex items-center text-gray-500">
              <span>Door {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Artikelen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 text-sm">{relatedPost.preview}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}
