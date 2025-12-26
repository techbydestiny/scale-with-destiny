const CTA = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Label */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium">READY TO START?</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="text-gray-300">destiny</span> is one conversation away
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy session. We'll discuss your idea, map out a timeline, and see if we're the right fit to bring your vision to life.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/start"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-100 transition-colors group"
            >
              Book Free Strategy Call
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/process"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-medium text-white hover:border-white/50 transition-colors"
            >
              See Full Process
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-sm text-gray-400">Of MVPs launched on time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60 days</div>
              <div className="text-sm text-gray-400">Average time to MVP launch</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-400">Focus on founder success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA