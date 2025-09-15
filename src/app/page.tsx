import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with CSS gradients and masks */}
      <div
        className="from-cream-100 via-sand-50 to-clay-50 absolute inset-0 bg-gradient-to-br"
        aria-hidden="true"
      />
      <div
        className="from-ink-900/5 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="bg-gradient-radial from-leaf-200/20 absolute top-0 right-0 h-1/3 w-1/3 rounded-full via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-gradient-radial from-brand-200/20 absolute bottom-0 left-0 h-1/2 w-1/2 rounded-full via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-heading"
          className="text-ink-900 font-serif text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Embrace Your
          <span className="from-brand-600 to-leaf-600 block bg-gradient-to-r bg-clip-text text-transparent">
            Natural Beauty
          </span>
        </h1>

        <p className="text-ink-700 mx-auto mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl md:text-2xl">
          Discover the transformative power of nature with LUNIVAAQ&apos;s
          carefully curated collection of pure, sustainable beauty and wellness
          products that honor both your body and the earth.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/collections"
            className="bg-brand-600 hover:bg-brand-700 focus:bg-brand-700 focus:ring-brand-500 inline-flex transform items-center justify-center rounded-xl px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Explore Collections
          </Link>

          <Link
            href="/rituals"
            className="text-brand-700 hover:bg-brand-50 focus:bg-brand-50 border-brand-600 focus:ring-brand-500 inline-flex transform items-center justify-center rounded-xl border-2 bg-transparent px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Discover Rituals
          </Link>
        </div>

        {/* Accessibility note - screen reader only */}
        <div className="sr-only">
          <p>
            Navigate using the main menu to explore our collections, learn about
            our rituals, read stories from our community, discover our brand
            story, or start shopping.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="border-ink-300 absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 transform rounded-full border-2 opacity-60"
        aria-hidden="true"
      >
        <div className="bg-ink-400 mx-auto mt-2 h-3 w-1 animate-bounce rounded-full" />
      </div>
    </section>
  );
}
