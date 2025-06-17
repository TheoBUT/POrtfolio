
import { ArrowDown, Github, Linkedin, Mail, Shield, Server, Network } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("a-propos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decoration - Cybersecurity themed */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Cybersecurity Icons */}
        <div className="absolute top-32 left-1/4 text-cyan-400 opacity-10">
          <Shield size={64} />
        </div>
        <div className="absolute bottom-32 right-1/4 text-blue-400 opacity-10">
          <Server size={64} />
        </div>
        <div className="absolute top-1/2 right-1/3 text-indigo-400 opacity-10">
          <Network size={64} />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Votre{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Nom
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Étudiant en BUT Informatique - Cybersécurité & Systèmes
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Spécialisé en déploiement d'applications sécurisées, SIEM, EDR et infrastructure réseau
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-300 hover:text-cyan-400 border border-white/20"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-300 hover:text-cyan-400 border border-white/20"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:votre@email.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-300 hover:text-cyan-400 border border-white/20"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-cyan-400/50"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
