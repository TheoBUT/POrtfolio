
import { ExternalLink, Github, Calendar, Code, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Application de Gestion de Tâches",
      description: "Application web complète permettant de gérer des projets et des tâches en équipe avec authentification et temps réel.",
      longDescription: `Ce projet m'a permis de développer mes compétences en développement full-stack. J'ai implémenté un système d'authentification sécurisé, une base de données relationnelle optimisée, et une interface utilisateur intuitive. 
      
      Compétences acquises : Architecture logicielle, gestion d'état complexe, optimisation des performances, tests unitaires.
      
      Savoir-être mis en œuvre : Travail en autonomie, résolution de problèmes complexes, attention au détail, respect des délais.`,
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "JWT"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      date: "Mars 2024",
      duration: "3 mois",
      team: "Solo"
    },
    {
      id: 2,
      title: "E-commerce Responsive",
      description: "Site e-commerce complet avec panier, paiement en ligne et administration. Design moderne et entièrement responsive.",
      longDescription: `Projet de création d'une boutique en ligne complète incluant la gestion des produits, des commandes et des utilisateurs. J'ai mis l'accent sur l'expérience utilisateur et la sécurité des transactions.
      
      Compétences acquises : Intégration d'APIs de paiement, optimisation SEO, gestion des médias, sécurisation des données.
      
      Savoir-être mis en œuvre : Sens du service client, adaptabilité, communication avec les parties prenantes.`,
      technologies: ["Vue.js", "Express", "Stripe", "MongoDB", "AWS"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      date: "Janvier 2024",
      duration: "4 mois",
      team: "3 personnes"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Interface d'administration avec graphiques interactifs et visualisation de données en temps réel.",
      longDescription: `Développement d'un tableau de bord administrateur permettant la visualisation et l'analyse de données complexes. Le projet comprenait des graphiques interactifs, des filtres avancés et des exports de données.
      
      Compétences acquises : Visualisation de données, optimisation des requêtes, design UX/UI, responsive design.
      
      Savoir-être mis en œuvre : Esprit analytique, collaboration en équipe, présentation de résultats.`,
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      date: "Novembre 2023",
      duration: "2 mois",
      team: "2 personnes"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations principales qui mettent en évidence mes compétences et mon évolution
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Code size={64} className="text-white opacity-50" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Calendar size={20} className="text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium">{project.date}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600">{project.duration}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <Users size={16} className="text-gray-600 mr-1" />
                    <span className="text-gray-600">{project.team}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Detailed Description */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Détails du projet :</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
