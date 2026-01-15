import { Package, Github, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Package,
      title: 'Docker',
      description: 'Advanced containers to ensure application stability',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Direct integration with GitHub for automatic deployment',
    },
    {
      icon: Zap,
      title: 'High Speed',
      description: 'Superior speed and optimized performance for your services',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">CloudBase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
At CloudBase, we fuel student ambition with smart, accessible cloud hosting. 
 so you can focus entirely on coding your projects and building your future with ease.
 We handle the server complexities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}