import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Glow 1 */}
      <div className="absolute -left-32 top-0 h-96 w-96 animate-pulse rounded-full bg-cyan-500/30 blur-3xl" />

      {/* Background Glow 2 */}
      <div
        className="absolute right-0 top-40 h-[28rem] w-[28rem] animate-pulse rounded-full bg-blue-600/20 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Background Glow 3 */}
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-indigo-500/20 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Clerk Login */}
      <div className="relative z-10">
        <SignIn />
      </div>
    </div>
  );
}