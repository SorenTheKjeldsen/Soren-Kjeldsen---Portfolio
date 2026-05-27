import { motion } from 'motion/react';
import { MonitorDot, Briefcase, UserRound, GraduationCap, Globe, Heart } from 'lucide-react';
import profileImage from '../assets/images/Portræt.png';

export default function About() {
  const experiences = [
    {
      company: 'Baks Arkitekter, 8250 Egå',
      role: 'Praktikant, studiemedhjælper',
      period: '2025 - 7 mdr.',
      tasks: [
        'Bidrog aktivt til projektering og udarbejdelse af tegningsmateriale i samarbejde med arkitekter, konstruktører og ingeniører.',
        'Udviklede Revit Families til implementering i nuværende og kommende projekter.',
        'Medvirkede til at strukturere dokumenthåndtering og implementere NBS Nordic til bygningsdelsjournal, hvilket bidrog til mere ensartet og overskueligt projektmateriale.'
      ]
    },
    {
      company: 'Hustømrerne A/S, 8200 Aarhus',
      role: 'Tømrersvend',
      period: '2021 - 2022',
      tasks: [
        'Udførte en bred vifte af tømrer- og snedkerarbejde på større akkordprojekter.',
        'Deltog i planlægning og koordinering af byggefaser.',
        'Ansvarlig for opmåling og bestilling af materialer til arbejdsopgaver.'
      ]
    },
    {
      company: 'Forsvaret - Oksbøl Kaserne, 6840 Oksbøl',
      role: 'Værnepligt i hæren',
      period: '2021 - 4 mdr.',
      tasks: [
        'Arbejdede målrettet i teams med struktur og samarbejde under pres.'
      ]
    },
    {
      company: 'Dalsgaard Pavilloner A/S, 7100 Vejle',
      role: 'Tømrersvend',
      period: '2020 - 3 mdr.',
      tasks: [
        'Produktion og montage af præfabrikerede træmoduler med fokus på kvalitet, præcision og tidsoptimering.'
      ]
    },
    {
      company: 'Bisgaard & Boysen Tømrer og Snedker, 6000 Kolding',
      role: 'Tømrerlærling',
      period: '2016 - 2020',
      tasks: [
        'Udførte tømrer- og snedkerarbejde på små og store projekter.',
        'Primært beskæftiget med renoveringsopgaver.',
        'Servicetømrer for VELFAC og Rationel med fokus på kvalitet og kundekontakt.'
      ]
    }
  ];

  const educations = [
    {
      school: 'VIA University College, 8000 Aarhus C',
      degree: 'Bygningskonstruktør, Projekterende',
      period: '2022 - 2026'
    },
    {
      school: 'Hansenberg Teknisk Gymnasium, 6000 Kolding',
      degree: 'Tømreruddannelsen, EUD',
      period: '2016 - 2020'
    }
  ];

  const itSkills = [
    { name: 'Revit', level: 'Højt niveau' },
    { name: 'AutoCAD', level: 'Mellemniveau' },
    { name: 'Visualisering i TwinMotion', level: 'Mellemniveau' },
    { name: 'Microsoft Office', level: 'Højt niveau' },
    { name: 'Microsoft Project', level: 'Mellemniveau' },
    { name: 'Sigma Enterprise', level: 'Brugerniveau' },
  ];

  const personalSkills = [
    'Tekniske beskrivelser', 'Dokumenthåndtering', 'Samarbejde i teams', 'Praktisk & teknisk forståelse'
  ];

  return (
    <section className="py-24 bg-brand-sand/30">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Profil Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24"
        >
          <div className="w-64 md:w-80 shrink-0 relative">
            <div className="relative aspect-[3/4] z-10 w-full h-full bg-dark-800 overflow-hidden shadow-xl rounded-2xl group xl:cursor-pointer">
              <img 
                src={profileImage} 
                alt="Søren Kjeldsen" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-sand/10 mix-blend-overlay" />
            </div>
          </div>
          <div className="text-center md:text-left pt-2 md:pt-6">
            <h1 className="text-4xl md:text-5xl font-serif text-dark-900 mb-2">SØREN KJELDSEN</h1>
            <h2 className="text-xl md:text-2xl text-brand-green/80 font-medium mb-4">Bygningskonstruktør MAK</h2>
            <p className="text-lg font-light text-dark-700 italic border-l-4 border-brand-green/30 pl-4 py-1 mb-8">
              "Udadvendt og engageret bygningskonstruktør med håndværkerbaggrund og Revit i fingerspidserne"
            </p>
            <div className="space-y-4 text-dark-800 font-light leading-relaxed max-w-3xl">
              <p>
                Jeg er en bygningskonstruktør med tømrerbaggrund og stærk praktisk samt teknisk forståelse. 
                Jeg arbejder struktureret med projekteringen af løsninger, hvor funktion, bygbarhed og æstetik går hånd i hånd.
              </p>
              <p>
                Gennem min baggrund har jeg en solid forståelse for detaljering og udførelse, hvilket sikrer 
                anvendelige løsninger på byggepladsen. Jeg er vant til at tage ansvar, skabe overblik og sikre 
                fremdrift i samarbejde med både projekterende og udførende. Som person er jeg engageret og kvalitetsbevidst 
                med et konstant fokus på gennemarbejdede løsninger samt faglig udvikling.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-24">
          
          {/* Main Content - Full Width */}
          <div className="space-y-20">
            
            {/* Erhvervserfaring */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Briefcase className="text-brand-green" size={28} strokeWidth={1.5} />
                <h3 className="text-3xl font-serif text-dark-900 uppercase tracking-widest">Erhvervserfaring</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] md:before:left-[27px] before:w-[2px] before:bg-black/10">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-12 md:pl-20">
                    <div className="absolute left-[8px] md:left-[20px] top-6 w-4 h-4 bg-brand-green rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.5)]" />
                    
                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white/60 hover:bg-white/70 transition-colors">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-dark-900 mb-1">{exp.company}</h4>
                          <span className="font-medium text-brand-green">{exp.role}</span>
                        </div>
                        <span className="shrink-0 text-sm font-medium bg-brand-sand/50 px-3 py-1 rounded-full text-dark-700">{exp.period}</span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="text-dark-700 font-light text-sm relative pl-4 before:absolute before:left-0 before:text-brand-green before:content-['•']">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Uddannelse */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-12">
                <GraduationCap className="text-brand-green" size={28} strokeWidth={1.5} />
                <h3 className="text-3xl font-serif text-dark-900 uppercase tracking-widest">Uddannelse</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] md:before:left-[27px] before:w-[2px] before:bg-black/10">
                {educations.map((edu, idx) => (
                  <div key={idx} className="relative pl-12 md:pl-20">
                    <div className="absolute left-[8px] md:left-[20px] top-6 w-4 h-4 bg-brand-green rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.5)] border-2 border-transparent" />
                    
                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white/60 hover:bg-white/70 transition-colors">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-dark-900 mb-1">{edu.school}</h4>
                          <span className="font-medium text-brand-green">{edu.degree}</span>
                        </div>
                        <span className="shrink-0 text-sm font-medium bg-brand-sand/50 px-3 py-1 rounded-full text-dark-700">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <hr className="border-black/5" />

          {/* Bottom Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            
            <div className="space-y-12">
              {/* IT-Kompetencer */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 border border-white/60 rounded-2xl shadow-sm hover:bg-white/70 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MonitorDot className="text-brand-green" size={24} strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-dark-900 uppercase tracking-wider">IT-Kompetencer</h3>
                </div>
                <ul className="space-y-4">
                  {itSkills.map((skill, idx) => (
                    <li key={idx}>
                      <div className="text-sm font-medium text-dark-800">{skill.name}</div>
                      <div className="text-xs text-dark-500 font-light">{skill.level}</div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Sprog */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 border border-white/60 rounded-2xl shadow-sm hover:bg-white/70 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-brand-green" size={24} strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-dark-900 uppercase tracking-wider">Sprog</h3>
                </div>
                <div className="space-y-3 text-sm text-dark-700 font-light">
                  <p><span className="font-medium text-dark-900 block mb-0.5">Dansk:</span> Modersmål</p>
                  <p><span className="font-medium text-dark-900 block mb-0.5">Engelsk:</span> Flydende (skrift & tale)</p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-12">
              {/* Styrker */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 border border-white/60 rounded-2xl shadow-sm hover:bg-white/70 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <UserRound className="text-brand-green" size={24} strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-dark-900 uppercase tracking-wider">Lidt om mine styrker</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalSkills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-brand-sand/50 text-dark-700 rounded-lg text-sm tracking-wide border border-white/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Interesser */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 border border-white/60 rounded-2xl shadow-sm hover:bg-white/70 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-brand-green" size={24} strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-dark-900 uppercase tracking-wider">Interesser</h3>
                </div>
                <p className="text-sm font-light text-dark-700 leading-relaxed">
                  Når jeg ikke projekterer, prioriterer jeg at holde mig aktiv – om det så er med sport, outdoor-aktiviteter eller i godt selskab med venner og familie.
                </p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
