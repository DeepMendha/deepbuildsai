# 🧠 DeepBuildsAI

DeepBuildsAI is a **knowledge-first AI/ML blog and portfolio system**. It is designed to explain complex AI/ML concepts with depth, share real project thinking (including failures and iterations), and serve as a comprehensive resource for learners and professionals.

## 🚀 Vision & Philosophy

This platform is not a generic tutorial blog. It is built on a "thinking-first" philosophy:
> *"Don’t just teach what works. Teach why it works, why it fails, and when NOT to use it."*

Every piece of content focuses on:
- Problem context and real-world applicability
- The naive approach and why it fails
- Real mistakes, debugging steps, and iteration journeys
- Final decisions and actionable insights

## 🏗 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Minimal Academic Theme)
- **Content:** Markdown / MDX (`next-mdx-remote`)
- **Hosting:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```
.
├── /app/                   # Next.js App Router (Layouts, Pages)
├── /components/            # Shared React UI components
├── /content/
│   ├── /blog/              # ✍️ Blog posts in .mdx format
│   └── ARTICLE_WRITING_PROMPT.md # Prompt template for new articles
├── /public/                # Static assets
└── README.md
```

## ✍️ Managing Content

Articles are written in **MDX** to support interactive React components within Markdown. All blog posts are located in `content/blog/`.

### Creating a New Post
1. Create a `.mdx` file in `content/blog/` (e.g., `my-case-study.mdx`).
2. Add the required YAML frontmatter at the top:
   ```yaml
   ---
   title: "Your Post Title Here"
   summary: "A 1-2 sentence summary of the problem and outcome."
   date: "YYYY-MM-DD"
   tags: ["Machine Learning", "Case Study"]
   ---
   ```
3. Use the instructions in `content/ARTICLE_WRITING_PROMPT.md` to help structure your thoughts and generate high-quality, "thinking-first" content.

## 💻 Local Development

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

## 🚀 Deployment

The project is configured for continuous integration with **Vercel**. Pushing changes to the `main` branch on GitHub will automatically trigger a new deployment.

```bash
git add .
git commit -m "Update content"
git push origin main
```
