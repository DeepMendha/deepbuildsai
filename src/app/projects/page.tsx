import Link from "next/link";

export const metadata = {
  title: "Projects | Deep Mendha",
  description: "Real-world AI/ML projects and case studies.",
};

// Mock static data for the portfolio projects
const projects = [
  {
    id: "semantic-search-engine",
    title: "Enterprise Semantic Search Engine",
    problem: "Keyword-based internal documentation search was failing to surface contextually relevant answers for engineering teams, leading to wasted time.",
    solution: "Built an end-to-end RAG pipeline using LangChain, pgvector for embedding storage, and optimized chunking strategies to drop retrieval latency by 40%.",
    tech: ["Python", "Langchain", "PostgreSQL", "Next.js"],
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance API",
    problem: "Hardware sensor data was too noisy for standard threshold alerting, causing false positives and disrupting manufacturing lines.",
    solution: "Trained an LSTM anomaly detection model on historical vibration data to predict failure windows 48 hours in advance with 92% precision.",
    tech: ["PyTorch", "FastAPI", "Docker", "AWS"],
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    id: "medical-image-classifier",
    title: "Medical Diagnostic Assistant",
    problem: "High variance in early screening of retinal scans required a robust second-opinion system for over-worked clinical staff.",
    solution: "Fine-tuned a ResNet-50 vision model on an augmented medical dataset. Deployed the resulting endpoint via serverless functions for immediate UI feedback.",
    tech: ["TensorFlow", "React", "Serverless"],
    githubUrl: "https://github.com",
    demoUrl: "#",
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Projects & Case Studies
        </h1>
        <p className="text-lg leading-8 text-zinc-600 max-w-2xl">
          A selection of problems I've solved. I focus on bridging the gap between raw data and tangible business value using Machine Learning.
        </p>
      </header>

      <section className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="flex flex-col gap-4 border border-zinc-200 p-6 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <header className="flex flex-col gap-2">
                <h2 className="text-xl font-medium text-foreground">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span 
                      key={tool} 
                      className="uppercase tracking-wider text-[10px] font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </header>
              
              <div className="flex flex-col gap-3 flex-1 mt-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">The Problem</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-navy mb-1 mt-1">The Solution</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
              
              <footer className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-100">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-500 hover:text-foreground transition-colors"
                >
                  GitHub repository
                </a>
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent-navy hover:text-blue-700 transition-colors"
                >
                  Live Demo →
                </a>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
