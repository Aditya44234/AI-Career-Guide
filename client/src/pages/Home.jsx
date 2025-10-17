import { ResumeForm } from "../components/ResumeForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white  flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Glowing Badge */}
        <div className="mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
          <p className="text-black-300 text-sm font-medium">
            AI-Powered Job Matching
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-blue-800 via-indigo-600 to-indigo-600 bg-clip-text text-transparent">
          Transform Your Resume
        </h1>

        <p className="text-xl md:text-2xl text-gray-900 text-center mb-4 max-w-2xl">
          Into Tailored Job Opportunities
        </p>

        <p className="text-slate-900 text-center mb-12 max-w-xl leading-relaxed">
          Upload your resume and let our AI extract your skills to match you
          with real-time job listings.
          <span className="text-purple-900 font-medium">
            {" "}
            Intentional. Alive. Premium.
          </span>
        </p>

        {/* Resume Form Component */}
        <div className="w-full max-w-2xl">
          <ResumeForm />
        </div>

 
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-indigo-800 font-medium">AI Career Guide</span>
            </div>

            {/* Tagline */}
            <p className="text-slate-500 text-sm text-center">
              Blending tradition with technology. Every interaction,
              intentional.
            </p>

            {/* Links */}
            <div className="flex gap-6 text-sm text-indigo-700">
              <a href="#" className="hover:text-indigo-900 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-indigo-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-indigo-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
