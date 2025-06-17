import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const missions = [
    {
      id: 1,
      title: "Mise en place d'un SIEM (Wazuh)",
      description: "Déploiement complet d'une solution SIEM pour la détection et l'analyse des menaces.",
      longDescription: `Projet de mise en œuvre d'un SIEM Wazuh dans un environnement professionnel :

• Installation et configuration de 2 serveurs : serveur indexer/dashboard et serveur manager
• Réalisation et implémentation de règles personnalisées et décodeurs pour la détection d'incidents
• Déploiement massif des agents Wazuh sur l'infrastructure
• Configuration des alertes et tableaux de bord pour le monitoring sécuritaire

Compétences acquises : Architecture SIEM, analyse de logs, détection d'intrusion, gestion des incidents
Savoir-être : Rigueur dans la configuration, documentation technique, travail en équipe SOC`,
      technologies: ["Wazuh", "Elasticsearch", "Linux", "Regex", "Kibana", "SIEM"],
      image: "/public/images/Wazuh.png"
    },
    {
      id: 2,
      title: "Sécurisation complète d'infrastructure réseau",
      description: "Projet de sécurisation globale incluant hyperviseurs, Active Directory, EDR et sauvegarde avec restauration complète.",
      longDescription: `Projet majeur de sécurisation d'infrastructure critique :

• Sécurisation de serveurs Active Directory avec audit PingCastle
• Réinstallation complète de 3 hyperviseurs (2 HP avec ILO, 1 DELL avec iDRAC)
• Configuration RAID 1 pour système et RAID 6 pour données
• Mise en place de la réplication Hyper-V entre hyperviseurs
• Restauration des VM avec Veeam Backup & Replication
• Déploiement EDR Sentinel One via GPO avec scripts PowerShell
• Création de scripts de force de changement de mots de passe
• Installation d'un nouveau NAS pour sauvegarde des serveurs restaurés

Compétences acquises : Virtualisation, sauvegarde/restauration, sécurité AD, déploiement EDR
Savoir-être : Gestion de projet, planification des maintenances, documentation détaillée`,
      technologies: ["Hyper-V", "Active Directory", "Sentinel One", "Veeam", "PowerShell", "RAID", "iLO/iDRAC"],
      image: "/public/images/sentinelone-logo.jpg"
    },
    {
      id: 3,
      title: "Campagne de phishing avec Gophish",
      description: "Organisation et réalisation d'une campagne de sensibilisation à la sécurité par tests de phishing sur les collaborateurs.",
      longDescription: `Campagne de sensibilisation à la cybersécurité :

• Configuration et déploiement de la plateforme Gophish
• Création de templates d'emails de phishing réalistes
• Ciblage et segmentation des collaborateurs
• Analyse des résultats et taux de réussite
• Élaboration de recommandations de sensibilisation
• Rapport détaillé avec métriques et plan d'amélioration

Compétences acquises : Social engineering, analyse comportementale, sensibilisation sécurité
Savoir-être : Communication pédagogique, éthique professionnelle, présentation de résultats`,
      technologies: ["Gophish", "Social Engineering", "Email Security", "Reporting"],
      image: "/images/project-phishing.jpg"
    },
    {
      id: 4,
      title: "Participation au projet SDWAN",
      description: "Contribution à la mise à jour de l'infrastructure réseau dans le cadre d'un projet de modernisation SDWAN.",
      longDescription: `Participation active au projet de modernisation réseau :

• Analyse de l'infrastructure réseau existante
• Participation à la planification de la migration SDWAN
• Configuration et tests des équipements réseau
• Documentation des procédures de migration
• Support technique durant la phase de déploiement
• Validation des performances post-migration

Compétences acquises : Technologies SDWAN, architecture réseau, gestion de projet réseau
Savoir-être : Travail en équipe projet, adaptabilité, esprit d'analyse`,
      technologies: ["SDWAN", "Cisco", "Routing", "Network Security", "VPN"],
      image: "/images/project-sdwan.jpg"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez mes principales missions en cybersécurité, systèmes et réseaux
          </p>
        </div>

        <div className="space-y-12">
          {missions.map((mission, index) => (
            <div
              key={mission.id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gray-700 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-[400px] flex items-center justify-center mt-20 ">
                    <img
                        src={mission.image}
                        alt={mission.title}
                        className="max-h-full max-w-full object-contain"
                      />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 text-white">
                  <h3 className="text-2xl font-bold text-white mb-4">{mission.title}</h3>
                  <p className="text-gray-300 mb-6">{mission.description}</p>

                  {/* Detailed Description */}
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-600">
                    <h4 className="font-semibold text-cyan-400 mb-2">Détails de la mission :</h4>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                      {mission.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {mission.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-medium border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
