export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <p className="industrial-title text-2xl tracking-[0.2em] text-white">
            HB
          </p>
        </div>

        <nav className="hidden gap-10 md:flex">
          {["Experience", "Education", "Impact", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-orange-400"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}