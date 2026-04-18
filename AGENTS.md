<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🧠 PROJECT_BIBLE.md

## 1. 🎯 Project Vision

### Purpose

To build a **knowledge-first AI/ML blog + portfolio system** that:

* Explains concepts with depth
* Shares real project thinking
* Helps learners and job seekers
* Builds authority and monetization opportunities

### Target Audience

* AI/ML beginners → intermediate learners
* Students preparing for placements
* Developers transitioning into AI/ML
* Recruiters (secondary audience)

---

## 2. 🚀 Unique Positioning (Core Differentiator)

This platform is NOT:

* A generic tutorial blog
* A copy-paste ML code repository

This platform IS:

* A **thinking-first knowledge system**
* A **decision-explaining platform**
* A **real-world ML breakdown hub**

---

## 3. 🧩 Content Pillars

### 📘 AI/ML Concepts

* Beginner → Advanced
* Focus on intuition + decision-making

### 🛠 Projects

* Real-world problems
* With GitHub + demo
* Includes failures + iterations

### 📊 Case Studies

* Industry-inspired problems
* Business + ML connection

### 🎯 Career / Resume

* Real examples
* Interview breakdowns
* Mistake analysis

### ⚡ Quick Notes

* Short insights
* Cheat sheets
* Key takeaways

---

## 4. ✍️ Writing Principles (NON-NEGOTIABLE)

### Every article MUST include:

* Problem context
* Why this approach?
* What alternatives were considered?
* What failed?
* Final decision reasoning

### Avoid:

* Generic explanations
* Rewriting existing content
* Pure theory without application

---

## 5. 🔒 Anti-AI Content Strategy

To ensure content is NOT easily reproducible:

### Include:

* Personal experiences
* Real project data
* Iteration journeys (v1 → v2 → v3)
* Strong opinions (with reasoning)
* Real mistakes and debugging steps

### Structure:

Problem → Attempt → Failure → Fix → Insight

---

## 6. 🏗 Tech Stack

### Core

* Framework: Next.js
* Styling: Tailwind CSS
* Content: Markdown / MDX
* Hosting: Vercel

### Optional (Future)

* Backend: Firebase
* Database: Firestore
* Auth: Firebase Auth

---

## 7. 📂 Project Structure

A more detailed and conventional Next.js App Router structure:

```
.
├── /app/
│   ├── /blog/[slug]/page.tsx # Dynamic route for blog posts
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── /components/              # Shared React components (e.g., Header, Card)
├── /content/
│   └── /blog/
│       └── *.mdx             # Blog posts in MDX format
├── /lib/                     # Utility functions (e.g., content parsing)
└── /public/                  # Static assets (images, fonts, etc.)
```

---

## 8. 🧠 Content System Flow

**MDX file → Parser (`next-mdx-remote`) → Frontmatter Data + Rendered Component → Rendered Page**

1.  **Content Creation**: Posts are written in MDX (`.mdx`) to allow for interactive components. Each file contains YAML frontmatter for metadata (title, summary, date, tags).
2.  **Parsing**: Use **`next-mdx-remote`** alongside `gray-matter` to parse MDX files. This ensures high stability, compatibility with App Router, and strong component injection capabilities.
3.  **Rendering**: The `app/blog/[slug]/page.tsx` file reads the raw file, extracts data, and renders the MDX using `MDXRemote`.
4.  **SEO**: The parsed metadata is used to dynamically generate `<head>` tags for optimal SEO.

---

## 9. 🎨 Design Principles (Theme: The AI Researcher - Minimal Academic)

* **Colors**: Off-white/Zinc backgrounds (`bg-zinc-50`), sharp black text, subtle deep navy/indigo accents for emphasis.
* **Vibe**: Readability-first, feels like a modern academic paper or a clean Substack.
* **UI Focus**: Minimalist UI, completely avoiding unnecessary noise or borders.
* **Typography**: Clean, readable sans-serif (or tailored serif for reading bodies).
* **Performance**: Fast loading and completely accessible.

---

## 10. 🛣 Roadmap

### Phase 1 (Now)

* Blog system (Markdown-based)
* Static pages
* Deploy on Vercel

### Phase 2

* Comments system
* Tag filtering
* Search

### Phase 3

* User accounts (Firebase)
* Newsletter

### Phase 4

* Monetization

  * Paid content
  * Digital products

---

## 11. 📈 SEO Strategy

* Focus on problem-solving keywords
* Use structured headings (H1, H2, H3)
* Internal linking (knowledge graph)
* Write for humans first, SEO second

---

## 12. 🔗 Content Linking Strategy

Each post should connect to:

* Previous concepts
* Related projects
* Advanced topics

Goal:
Create a **knowledge graph, not isolated posts**

---

## 13. 💰 Monetization Strategy (Future)

* Digital products (PDFs, guides)
* Courses
* Mentorship
* Affiliate links

---

## 14. 🧪 Quality Checklist (Before Publishing)

* Is this solving a real problem?
* Is this better than existing content?
* Does it include original thinking?
* Is it practical?
* Is it honest (failures included)?

---

## 15. 🧠 Guiding Philosophy

"Don’t just teach what works. Teach why it works, why it fails, and when NOT to use it."
