
import { GraduationCap, Target, User, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mon parcours, ma formation et mes aspirations professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <User className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Qui suis-je ?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Passionné par le développement web et les nouvelles technologies, je suis actuellement 
                étudiant en [Votre Formation]. Mon approche combine créativité et rigueur technique 
                pour créer des solutions numériques innovantes et user-friendly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-green-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Ma Formation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>2023-2025 :</strong> [Nom de votre formation] - [Établissement]<br />
                <strong>Spécialisations :</strong> Développement web, UX/UI Design, Gestion de projet<br />
                <strong>Compétences clés :</strong> React, TypeScript, Node.js, Design thinking
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Projet Professionnel</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mon objectif est de devenir développeur full-stack dans une entreprise innovante 
                où je pourrai contribuer à des projets ayant un impact positif. Je souhaite 
                continuer à apprendre et évoluer dans un environnement stimulant.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-orange-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Recherche d'Emploi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Poste recherché :</strong> Développeur web junior / Alternance<br />
                <strong>Secteurs d'intérêt :</strong> Start-ups, Agences digitales, ESN<br />
                <strong>Disponibilité :</strong> Immédiate pour stage/alternance
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Compétences Techniques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", level: 85 },
              { name: "TypeScript", level: 80 },
              { name: "CSS/Tailwind", level: 90 },
              { name: "Node.js", level: 75 },
              { name: "Git", level: 85 },
              { name: "Figma", level: 70 },
              { name: "SQL", level: 75 },
              { name: "API REST", level: 80 }
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 mt-1 block">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
