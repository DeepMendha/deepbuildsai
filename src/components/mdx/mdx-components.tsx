import React from "react";

// A stylish callout box for 'Insights' or 'Warnings'
export function Callout({ children, type = "default" }: { children: React.ReactNode, type?: "default" | "warning" | "success" | "insight" }) {
  const styles = {
    default: "bg-zinc-100 border-l-4 border-zinc-400 text-zinc-800",
    warning: "bg-amber-50 border-l-4 border-amber-500 text-amber-900",
    success: "bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900",
    insight: "bg-blue-50 border-l-4 border-accent-navy text-accent-navy",
  };

  return (
    <div className={`p-4 my-6 rounded-r-md ${styles[type]} text-sm leading-relaxed`}>
      {children}
    </div>
  );
}

// A placeholder for technical architecture diagrams
export function ArchitectureDiagramPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full h-64 border border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center my-8 bg-zinc-50/50">
      <svg className="w-10 h-10 text-zinc-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
      <span className="text-zinc-500 font-medium font-mono text-sm uppercase tracking-widest">{title}</span>
      <span className="text-zinc-400 text-xs mt-2 italic">Architecture Diagram coming soon</span>
    </div>
  );
}

// Map the custom components to an object that MDXRemote can consume
export const mdxComponents = {
  Callout,
  ArchitectureDiagramPlaceholder,
};
