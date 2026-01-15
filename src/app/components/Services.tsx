import { Server, Container, Lightbulb } from 'lucide-react';

export function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Server,
      title: 'Web Hosting',
      description: 'Advanced web hosting with high performance and robust security',
      features: ['Free SSL', 'Unlimited Bandwidth', '24/7 Technical Support'],
    },
    {
      icon: Container,
      title: 'Managed Docker',
      description: 'Manage your Docker containers easily and securely',
      features: ['Automatic Deployment', 'Continuous Monitoring', 'Auto Scaling'],
    },
    {
      icon: Lightbulb,
      title: 'Cloud Consulting',
      description: 'Specialized cloud consulting to improve your infrastructure',
      features: ['Comprehensive Analysis', 'Custom Recommendations', 'Implementation Support'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of cloud services designed to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={scrollToContact}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 cursor-pointer hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <service.icon className="w-8 h-8 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <span className="text-cyan-400 text-sm group-hover:underline">
                  Click to contact →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}