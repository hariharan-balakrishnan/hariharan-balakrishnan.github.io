import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 lg:px-8 lg:pt-32">
      
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Glow Accent */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        
        {/* IMAGE */}
        <div className="order-1 flex justify-center lg:justify-start">
          <div className="relative">
            
            {/* Image Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-orange-500/10 blur-3xl" />

            {/* Image Card */}
            <div className="relative">
              <Image
                src="/images/hero.png"
                alt="Hariharan Balakrishnan"
                width={700}
                height={900}
                priority
                className="
                  h-auto
                  w-[240px]
                  object-contain
                  sm:w-[300px]
                  md:w-[360px]
                  lg:w-[460px]
                  xl:w-[520px]
                "
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 text-center lg:text-left">
          
          <p className="
            mb-5
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-orange-400
            sm:text-xs
            md:text-sm
          ">
            Ashok Leyland • Production Planning & Control
          </p>

          <h1 className="
            industrial-title
            text-5xl
            leading-[0.9]
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-[7rem]
            xl:text-[8.5rem]
          ">
            HARIHARAN
            <br />
            BALAKRISHNAN
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-orange-500 lg:mx-0 lg:mt-8 lg:w-32" />

          <p className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-relaxed
            text-white/70
            sm:text-base
            md:text-lg
            lg:mx-0
            lg:mt-8
            lg:text-xl
          ">
            27+ years in manufacturing operations, production
            planning, industrial systems, SAP integration, and
            automotive engineering excellence.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-16 w-px bg-gradient-to-b from-orange-500 to-transparent" />
      </div>
    </section>
  );
}