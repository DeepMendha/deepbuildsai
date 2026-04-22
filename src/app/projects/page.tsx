import Link from "next/link";

export const metadata = {
  title: "Projects | Deep Mendha",
  description: "Real-world AI/ML projects and case studies.",
};

// Mock static data for the portfolio projects, updated with real GitHub repos
const projects = [
  {
    id: "deep-learning-recsys",
    title: "Collaborative Filtering Recommendation System",
    problem: "Users were struggling to discover relevant items in a large catalog, leading to lower engagement and conversion rates.",
    solution: "Implemented a collaborative filtering model using Deep Learning to capture non-linear user-item relationships, improving recommendation accuracy over traditional matrix factorization.",
    tech: ["Deep Learning", "Python", "Jupyter Notebook"],
    githubUrl: "https://github.com/DeepMendha/Collaborative-Filtering-based-Recommendation-System-using-Deep-Learning",
    demoUrl: "#",
  },
  {
    id: "stock-prediction",
    title: "Stock Trend Prediction Model",
    problem: "Traditional moving average indicators were too slow to react to sudden market changes, missing optimal entry and exit points.",
    solution: "Developed a time-series forecasting model to predict short-term stock price movements, comparing traditional statistical methods with modern neural network architectures.",
    tech: ["Machine Learning", "Python", "Time Series"],
    githubUrl: "https://github.com/DeepMendha/Stock-Prediction",
    demoUrl: "#",
  },
  {
    id: "text-emotion",
    title: "Text Emotion Classifier",
    problem: "Basic sentiment analysis (positive/negative) was insufficient for understanding nuanced customer feedback and support tickets.",
    solution: "Trained an NLP model to classify text into fine-grained emotional categories, allowing for prioritized and empathetic customer support routing.",
    tech: ["NLP", "Python", "Machine Learning"],
    githubUrl: "https://github.com/DeepMendha/Text_emotion",
    demoUrl: "#",
  },
  {
    id: "heart-risk",
    title: "Predictive Heart Risk Assessment",
    problem: "Medical professionals needed a quick, data-driven way to flag high-risk patients based on standard clinical metrics.",
    solution: "Built a classification model analyzing patient data to predict cardiovascular risk, focusing on high recall to minimize false negatives in medical screening.",
    tech: ["Python", "Classification", "Scikit-learn"],
    githubUrl: "https://github.com/DeepMendha/Heart-Risk",
    demoUrl: "#",
  },
  {
    id: "loan-prediction",
    title: "Loan Default Predictor",
    problem: "Manual review of loan applications was slow and prone to human bias, delaying approvals and increasing risk exposure.",
    solution: "Created a machine learning pipeline to assess applicant risk profiles, automating initial screening while maintaining model explainability for financial compliance.",
    tech: ["Machine Learning", "Python", "Pandas"],
    githubUrl: "https://github.com/DeepMendha/Loan-Prediction",
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
