import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  [key: string]: any;
}

// Make sure the directory exists
function ensureDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

export function getAllPosts(): Post[] {
  ensureDirectory()
  const files = fs.readdirSync(postsDirectory)

  const posts = files
    .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      return {
        ...data,
        slug: filename.replace(/\.mdx?$/, ''),
        date: data.date || new Date().toISOString(),
      } as Post
    })
    
  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}

export function getPostBySlug(slug: string) {
  ensureDirectory()
  
  // Support both .md and .mdx
  let fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`)
  }

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as Partial<Post>,
    content,
  }
}