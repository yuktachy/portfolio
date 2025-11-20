import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-6 py-16">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6">About Me</h1>

      {/* Profile Card */}
      <div className="bg-gray-900/70 border border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col items-center mb-12 max-w-md w-full">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white">
          <Image
            src="/profile.png"
            alt="Yukta Choudhary"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Yukta Choudhary</h2>
        <p className="text-gray-400 text-center mb-4">
          Creative Developer | Designer | Problem Solver
        </p>
      </div>

      {/* Skills */}
      <section className="max-w-4xl w-full mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {[].map(
            (skill) => (
              <div
                key={skill}
                className="border border-gray-700 bg-gray-900/40 rounded-xl py-3 text-gray-200 hover:bg-gray-800 transition"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* Back Button */}
      <Link
        href="/"
        className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
      >
        Back to Home
      </Link>
    </main>
  );
}
