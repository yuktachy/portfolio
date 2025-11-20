import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* Background Image - Full Screen */}
      <Image
        src="/profile.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Navy Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">

        <h1 className="text-4xl font-extrabold mb-4 tracking-wide">
          Yukta Choudhary
        </h1>

        <p className="max-w-2xl text-gray-200 leading-relaxed mb-8">
          I am deeply committed to combining creativity and technical skills in
          everything I do, drawing inspiration from experiences and challenges
          that have shaped my journey. Each project reflects my curiosity,
          adaptability, and desire to make a genuine impact, whether through
          design, writing, or problem-solving. I value collaboration,
          continuous growth, and bringing positivity and intention to every
          aspect of my work.
        </p>

        <Link
          href="/about"
          className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          About Me
        </Link>

      </div>
    </main>
  );
}
