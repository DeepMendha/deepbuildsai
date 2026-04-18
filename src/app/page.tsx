import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3); // Grab the 3 most recent posts

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Deep Mendha
        </h1>
        <div className="text-lg leading-8 text-zinc-600 max-w-2xl flex flex-col gap-4">
          <p>
            I build <strong>AI/ML systems</strong> focused on business outcomes. This is my digital notebook, where I explore the logic, failures, and architecture behind modern machine learning problems.
          </p>
          <p>
            Don't just teach what works. Teach why it works, why it fails, and when NOT to use it.
          </p>
        </div>
        <div className="flex gap-4 mt-2">
          <Link 
            href="/blog" 
            className="rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Read Notes
          </Link>
          <Link 
            href="/projects" 
            className="rounded-md border border-zinc-200 px-5 py-2.5 text-sm font-medium hover:border-zinc-300 hover:bg-zinc-100 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      <hr className="border-zinc-200" />

      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          Recent Thinking
        </h2>
        
        <div className="flex flex-col gap-6">
          {recentPosts.length === 0 ? (
            <p className="text-zinc-500 italic">No notes published yet.</p>
          ) : (
            recentPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col gap-2">
                <Link href={`/blog/${post.slug}`} className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent-navy transition-colors">
                    {post.title}
                  </h3>
                  {post.summary && (
                    <p className="text-zinc-600 leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-sm text-zinc-500 mt-1">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span>•</span>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag: string) => (
                            <span key={tag} className="uppercase tracking-wider text-[10px] font-semibold text-accent-navy/80 bg-accent-navy/10 px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
        
        {recentPosts.length > 0 && (
          <Link href="/blog" className="text-sm font-medium text-accent-navy hover:underline mt-2">
            View all notes →
          </Link>
        )}
      </section>
    </div>
  );
}
