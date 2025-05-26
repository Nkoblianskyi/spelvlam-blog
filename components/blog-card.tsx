import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types"
import { Calendar, User } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {post.date}
          </div>
        </div>
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.preview}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Lees artikel
          </Link>
        </div>
      </div>
    </article>
  )
}
