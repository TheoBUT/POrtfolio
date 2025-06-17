
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Étudiant passionné par le développement web, toujours à la recherche de nouveaux défis 
              et d'opportunités d'apprentissage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(" ", "-"));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Mail</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:votre@email.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
