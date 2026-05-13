const navItems = [
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Impact",
    href: "#impact",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <p className="industrial-title text-2xl tracking-[0.2em] text-white">
            HB
          </p>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-white/70
                transition
                duration-300
                hover:text-orange-400
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}