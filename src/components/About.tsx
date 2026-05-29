import { motion } from 'motion/react';
import { MonitorDot, Briefcase, UserRound, GraduationCap, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    'Revit', 'AutoCAD', 'TwinMotion', 'Microsoft Office', 
    'Microsoft Project', 'Sigma Enterprise', 'Forma', 'BE18', 'LCA-byg'
  ];

  const personalSkills = [
    'Grammatik', 'Kvalitetsbevidst', 'Positiv & energisk', 'Tekniske beskrivelser', 'Dokumenthåndtering', 'Samarbejde i teams', 'Praktisk forståelse'
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-sand overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Profil Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center md:items-start"
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
            <div className="text-center md:text-left pt-2 md:pt-6 w-full">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="w-12 h-[1px] bg-brand-green hidden md:block"></span>
                <span className="text-brand-green tracking-[0.3em] font-medium text-xs lg:text-sm uppercase">Bygningskonstruktør MAK</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-dark-900 leading-[1.1] mb-6 font-normal">
                Søren <br className="hidden md:block" />
                <span className="italic text-brand-green-light">Kjeldsen.</span>
              </h1>
              
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
        </div>
      </section>

      <section className="py-32 bg-brand-sand-light overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-24">
            
            {/* Main Content - Full Width */}
            <div className="space-y-20">
              
              {/* Erhvervserfaring */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="text-center mb-16">
                  <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase flex items-center justify-center gap-3 mb-4">
                    <Briefcase size={20} strokeWidth={1.5} /> Professionel
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-serif text-dark-900 uppercase">Erhvervserfaring</h2>
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
          </div>
        </div>
      </div>
    </section>

    {/* Uddannelse */}
      <section className="py-24 bg-brand-sand overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center mb-16">
                <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase flex items-center justify-center gap-3 mb-4">
                  <GraduationCap size={20} strokeWidth={1.5} /> Faglig
                </span>
                <h2 className="text-4xl lg:text-6xl font-serif text-dark-900 uppercase">Uddannelse</h2>
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
      </section>

      <section className="py-24 bg-brand-sand-light overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Bottom Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
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
                <div className="flex flex-wrap gap-2">
                  {itSkills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-brand-sand/50 text-dark-700 rounded-lg text-sm tracking-wide border border-white/50">
                      {skill}
                    </span>
                  ))}
                </div>
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
                <div className="flex flex-wrap gap-2">
                  {['Dansk', 'Engelsk'].map((lang, idx) => (
                    <span key={idx} className="px-4 py-2 bg-brand-sand/50 text-dark-700 rounded-lg text-sm tracking-wide border border-white/50">
                      {lang}
                    </span>
                  ))}
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
                  <h3 className="text-xl font-serif text-dark-900 uppercase tracking-wider">MINE STYRKER</h3>
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
                  I min fritid interesserer jeg mig for løbetræning, møbeldesign og træarbejde. Jeg bruger også meget tid sammen med venner og familie og nyder at følge med i fodbold, hvor særligt Premier League har min interesse.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
    </section>

    {/* Contact CTA */}
    <section className="py-24 bg-brand-sand overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-dark-900 uppercase tracking-wider">
            Lyder det interessant?
          </h2>
          <p className="text-lg md:text-xl text-dark-700 font-light max-w-2xl mx-auto">
            Så kontakt mig og lad os tage en uforpligtende snak om, hvordan vi kan samarbejde.
          </p>
          <div className="pt-8">
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center border border-dark-900/10 text-dark-800 px-10 py-5 uppercase tracking-widest text-sm hover:border-brand-green hover:text-brand-green hover:bg-white/50 bg-white/30 transition-all"
            >
              KONTAKT MIG
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
