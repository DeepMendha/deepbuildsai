import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 text-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-6xl font-medium tracking-tighter text-foreground">
          404
        </h2>
        <p className="text-xl text-zinc-500">
          This note doesn't exist (yet).
        </p>
      </div>
      <p className="text-sm text-zinc-600 max-w-md">
        The page you're looking for might have been moved, deleted, or you might have traversed an incorrect path.
      </p>
      <Link 
        href="/" 
        className="mt-4 rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
