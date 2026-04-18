import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Notes | Deep Mendha",
  description: "Explorations in AI, ML, and Software Architecture.",
};

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Notes & Research
        </h1>
        <p className="text-lg leading-8 text-zinc-600 max-w-2xl">
          Deep dives into modern machine learning, system architecture, and 
          lessons learned from building real-world AI applications.
        </p>
      </header>

      <section className="flex flex-col gap-8">
        {posts.length === 0 ? (
          <p className="text-zinc-500 italic">No notes published yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col gap-3">
                <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2">
                  <header>
                    <h2 className="text-xl font-medium text-foreground group-hover:text-accent-navy transition-colors">
                      {post.title}
                    </h2>
                  </header>
                  
                  {post.summary && (
                    <p className="text-zinc-600 leading-relaxed max-w-3xl">
                      {post.summary}
                    </p>
                  )}
                  
                  <footer className="flex items-center gap-3 text-sm text-zinc-500 mt-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag: string) => (
                            <span 
                              key={tag} 
                              className="uppercase tracking-wider text-[10px] font-semibold text-accent-navy/80 bg-accent-navy/10 px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </footer>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}