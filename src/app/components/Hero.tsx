import videoBg from './Background.mp4';
export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
            <source src={videoBg} type="video/mp4" />        
          Your browser does not support the video tag.
        </video>
        
        {/* التعتيم - مهم جداً لظهور النص */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          CloudBase: <span className="text-cyan-400">Your Gateway</span>
          <br /> to Digital Success
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12">
          We provide advanced hosting solutions powered by Docker and GitHub technologies.
        </p>

        <button
          onClick={scrollToContact}
          className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:scale-105 transition-all"
        >
          Start Now
        </button>
      </div>
    </section>
  );
}