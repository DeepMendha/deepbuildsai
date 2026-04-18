import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/mdx-components'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug)
  if (!post) return {}
  
  return {
    title: `${post.frontmatter.title} | Deep Mendha`,
    description: post.frontmatter.summary || "A deep dive into AI/ML problem solving.",
    keywords: post.frontmatter.tags,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: ["Deep Mendha"]
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="w-full flex flex-col gap-10">
      <Link href="/blog" className="text-sm font-medium text-zinc-500 hover:text-foreground transition-colors w-fit">
        ← Back to notes
      </Link>

      <header className="flex flex-col gap-4 border-b border-zinc-200 pb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground leading-tight">
          {post.frontmatter.title}
        </h1>
        
        <div className="flex items-center gap-3 text-sm text-zinc-500">
          {post.frontmatter.date && (
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
          
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
                {post.frontmatter.tags.map((tag: string) => (
                  <span key={tag} className="uppercase tracking-wider text-[10px] font-semibold text-accent-navy bg-accent-navy/10 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
      
      <div className="prose prose-zinc prose-a:text-accent-navy hover:prose-a:text-blue-700 prose-headings:font-medium prose-p:leading-8 max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  )
}
