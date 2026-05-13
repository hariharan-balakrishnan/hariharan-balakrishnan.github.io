import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Impact />
    </main>
  );
}