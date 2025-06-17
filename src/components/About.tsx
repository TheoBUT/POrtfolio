
import { GraduationCap, Target, User, Shield, Server, Network, Database } from "lucide-react";

export const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mon parcours en cybersécurité et ma formation en déploiement d'applications sécurisées
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 p-6 rounded-2xl shadow-lg text-white">
              <div className="flex items-center mb-4">
                <User className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Qui suis-je ?</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Passionné par la cybersécurité et l'infrastructure système, je suis actuellement 
                étudiant en BUT Informatique parcours déploiement d'applications communicantes et sécurisées. 
                Mon expertise couvre les SIEM, EDR, sécurisation d'infrastructures et tests d'intrusion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg border border-cyan-200">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-cyan-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Ma Formation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>2022-2025 :</strong> BUT Informatique - Déploiement d'applications communicantes et sécurisées<br />
                <strong>2025-2027 :</strong> Master Sécurité informatique, cybersécurité et cybermenaces<br />
                <strong>Spécialisations :</strong> SIEM, EDR, Infrastructure réseau, Tests d'intrusion<br />
                <strong>Compétences clés :</strong> Wazuh, Sentinel One, Active Directory, Hyper-V, Veeam
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-2xl shadow-lg text-white">
              <div className="flex items-center mb-4">
                <Target className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Projet Professionnel</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Mon objectif est de devenir expert en cybersécurité dans une entreprise où je pourrai 
                contribuer à la sécurisation des infrastructures et à la détection des menaces. 
                Je souhaite approfondir mes connaissances en SOC et analyse forensique.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-red-200">
              <div className="flex items-center mb-4">
                <Shield className="text-red-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Recherche d'Opportunités</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Poste recherché :</strong> Analyste cybersécurité junior / Stage en SOC<br />
                <strong>Secteurs d'intérêt :</strong> SOC, CERT, Intégrateurs sécurité<br />
                <strong>Disponibilité :</strong> Immédiate pour stage/alternance
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section - Sans barres de progression */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Compétences Techniques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "SIEM (Wazuh)", icon: Database },
              { name: "EDR (Sentinel One)", icon: Shield },
              { name: "Active Directory", icon: Server },
              { name: "Hyper-V", icon: Server },
              { name: "Veeam Backup", icon: Database },
              { name: "Phishing (Gophish)", icon: Shield },
              { name: "Infrastructure Réseau", icon: Network },
              { name: "PowerShell Scripting", icon: Server }
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <skill.icon className="mx-auto mb-3 text-blue-600" size={32} />
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
