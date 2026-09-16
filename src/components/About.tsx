import React from "react";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MonitorDot, Briefcase, UserRound, GraduationCap, Globe, Heart, X, Star, ChevronLeft, ChevronRight, PencilRuler, Hammer, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import profileImage from '../assets/images/Billede fra BAKS.png';
import w1 from '../assets/images/Værksted/VÆRKSTED_1.jpg';
import w2 from '../assets/images/Værksted/VÆRKSTED_2.jpg';
import w3 from '../assets/images/Værksted/VÆRKSTED_3.jpg';
import w4 from '../assets/images/Værksted/VÆRKSTED_4.jpg';
import w5 from '../assets/images/Værksted/VÆRKSTED_5.jpg';
import w6 from '../assets/images/Værksted/VÆRKSTED_6.png';
import w7 from '../assets/images/Værksted/VÆRKSTED_7.png';
import w8 from '../assets/images/Værksted/VÆRKSTED_8.png';
import w9 from '../assets/images/Værksted/VÆRKSTED_9.jpg';
import w10 from '../assets/images/Værksted/VÆRKSTED_10.png';
import w11 from '../assets/images/Værksted/VÆRKSTED_11.jpg';
import w12 from '../assets/images/Værksted/VÆRKSTED_12.png';
import w13 from '../assets/images/Værksted/VÆRKSTED_13.jpg';
import w14 from '../assets/images/Værksted/VÆRKSTED_14.jpg';
import w15 from '../assets/images/Værksted/VÆRKSTED_15.jpg';

import w18 from '../assets/images/Værksted/VÆRKSTED_18.jpg';
import w19 from '../assets/images/Værksted/VÆRKSTED_19.jpg';
import w20 from '../assets/images/Værksted/VÆRKSTED_20.jpg';
import w21 from '../assets/images/Værksted/VÆRKSTED_21.jpg';
import svendeproeveImage from '../assets/images/Svendeprøve 4K.webp';
import { RevealText } from './RevealText';
import CTA from './CTA';

const ArchitectureIcon = ({ size = 24, className = "", strokeWidth = 1.5, ...props }: any) => {
  const adjustedSize = Number(size) * 1.35;
  return (
    <svg width={adjustedSize} height={adjustedSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 6c0-1.1.9-2 2-2h8.5" />
      <path d="M4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5" />
      <path d="M8 12l4-3 4 3v5H8v-5z" />
      <path d="M20.5 4.5a2.12 2.12 0 0 0-3 0L12 10l-1 3 3-1 5.5-5.5a2.12 2.12 0 0 0 0-3z" />
      <path d="M17.5 6.5l3 3" />
    </svg>
  );
};

const MilitaryHelmetIcon = ({ size = 24, className = "", strokeWidth = 1.5, ...props }: any) => {
  const adjustedSize = Number(size) * 1.45;
  return (
    <svg width={adjustedSize} height={adjustedSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 14.5c0-4.5 3.5-8.5 8-8.5s8 4 8 8.5" />
      <path d="M2 14.5h20" />
      <path d="M2 14.5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2" />
      <path d="M12 8l1 2.5h2.5l-2 1.5.8 2.5-2-1.5-2 1.5.8-2.5-2-1.5H11z" />
    </svg>
  );
};

export default function About() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let animationFrameId: number;
    let isInteracting = false;
    let interactionTimeout: NodeJS.Timeout;
    let exactScrollLeft = el.scrollLeft;

    const handleInteraction = () => {
      isInteracting = true;
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        isInteracting = false;
      }, 100);
    };
    
    el.addEventListener('wheel', handleInteraction, { passive: true });
    el.addEventListener('touchstart', handleInteraction, { passive: true });
    el.addEventListener('touchmove', handleInteraction, { passive: true });
    
    const handleScroll = () => {
      if (isInteracting) {
        exactScrollLeft = el.scrollLeft;
      }
    };
    el.addEventListener('scroll', handleScroll, { passive: true });

    const scroll = () => {
      if (!isInteracting && el) {
        exactScrollLeft += 0.5; // Controls the speed of auto-scroll
        if (exactScrollLeft >= el.scrollWidth / 2) {
           exactScrollLeft = 0;
        }
        el.scrollLeft = exactScrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      el.removeEventListener('wheel', handleInteraction);
      el.removeEventListener('touchstart', handleInteraction);
      el.removeEventListener('touchmove', handleInteraction);
      el.removeEventListener('scroll', handleScroll);
      clearTimeout(interactionTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const workshopImages: string[] = [
    w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w18, w19, w20, w21
  ];
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % workshopImages.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + workshopImages.length) % workshopImages.length);
  };

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setActiveImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, workshopImages.length]);

  const experiences = [
    {
      company: 'Vang Arkitekter, 8000 Aarhus C',
      role: 'Bygningskonstruktør, projekterende',
      period: '2026 - 3 mdr.',
      icon: ArchitectureIcon,
      tasks: []
    },
    {
      company: 'Baks Arkitekter, 8250 Egå',
      role: 'Praktikant, studiemedhjælper',
      period: '2025 - 7 mdr.',
      icon: ArchitectureIcon,
      tasks: [
        'Bidrog aktivt til projektering og udarbejdelse af tegningsmateriale i samarbejde med arkitekter, konstruktører og ingeniører.',
        'Udviklede Revit Families til implementering i nuværende og kommende projekter.',
        'Medvirkede til at strukturere dokumenthåndtering og implementere NBS Nordic til bygningsdelsjournal, hvilket bidrog til mere ensartet og overskueligt projektmateriale.'
      ]
    },
    {
      company: 'Hustømrerne A/S, 8200 Aarhus N',
      role: 'Tømrersvend',
      period: '2021 - 2022',
      icon: Hammer,
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
      icon: MilitaryHelmetIcon,
      tasks: [
        'Arbejdede målrettet i teams med struktur og samarbejde under pres.'
      ]
    },
    {
      company: 'Dalsgaard Pavilloner A/S, 7100 Vejle',
      role: 'Tømrersvend',
      period: '2020 - 3 mdr.',
      icon: Hammer,
      tasks: [
        'Produktion og montage af præfabrikerede træmoduler med fokus på kvalitet, præcision og tidsoptimering.'
      ]
    },
    {
      company: 'Bisgaard & Boysen Tømrer og Snedker, 6000 Kolding',
      role: 'Tømrerlærling',
      period: '2016 - 2020',
      icon: Hammer,
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
      period: '2022 - 2026',
      badge: 'NYT',
      icon: BookOpen
    },
    {
      school: 'Hansenberg Teknisk Gymnasium, 6000 Kolding',
      degree: 'Tømreruddannelsen, EUD',
      period: '2016 - 2020',
      icon: BookOpen
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
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-brand-sand overflow-hidden top-0">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Profil Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mr-auto lg:ml-0 w-full shrink-0">
              <div className="relative z-10 w-full h-full bg-dark-800 overflow-hidden shadow-xl rounded-2xl group xl:cursor-pointer">
                <img 
                  src={profileImage} 
                  alt="Søren Kjeldsen" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-sand/10 mix-blend-overlay" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="w-12 h-[1px] bg-brand-green hidden lg:block"></span>
                <span className="text-brand-green tracking-[0.3em] font-medium text-xs lg:text-sm uppercase">Bygningskonstruktør | Tømrer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-dark-900 leading-[1.1] mb-6 font-normal flex flex-wrap gap-x-4">
                <RevealText text="Søren" delay={0.2} />
                <span className="italic text-brand-green-light">
                  <RevealText text="Kjeldsen." delay={0.4} />
                </span>
              </h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="space-y-4 text-dark-800 font-light leading-relaxed text-justify"
              >
                <p>
                  Jeg blev færdiguddannet bygningskonstruktør i januar 2026 og har en særlig interesse for BIM, projektering og koordinering. Jeg kan godt lide, når ting er gennemtænkte, strukturerede og ser professionelle ud – hvad enten det gælder en BIM-model, et tegningssæt eller andet.
                </p>
                <p>
                  Jeg er typen, der lægger mærke til detaljerne. Ikke fordi alt skal være perfekt, men fordi de små ting ofte er det, der får helheden til at fungere. Derfor bruger jeg også gerne lidt ekstra tid på layout, formidling og det visuelle udtryk. Et godt projekt skal ikke kun være teknisk korrekt – det skal også være let at forstå og rart at arbejde videre med.
                </p>
                <p>
                  Gennem min uddannelse og praktik har jeg arbejdet med projektering, visualisering og teknisk dokumentation. Jeg motiveres af nytænkende opgaver, især når de kan brydes ned til overskuelige løsninger. Der er noget tilfredsstillende ved at få mange brikker til at falde på plads og skabe et resultat, der fungerer i praksis.
                </p>
                <p>
                  Jeg kommer oprindeligt fra Vejen, men bor i dag i Risskov sammen med min kæreste. Uden for arbejdet bruger jeg blandt andet tid på møbeldesign, forskellige kreative projekter eller at se en fodboldkamp i fjernsynet. Fælles for det meste af det, jeg interesserer mig for, er, at jeg godt kan lide at skabe noget fra bunden og nørde detaljerne undervejs.
                </p>
                <p>
                  Som person er jeg ydmyg, jordnær og nem at arbejde sammen med. Jeg tager mit arbejde seriøst og stiller gerne spørgsmål, hvis det kan føre til en bedre løsning. Samtidig tror jeg på, at godt samarbejde og en god omgangstone er mindst lige så vigtigt som de tekniske kompetencer.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-brand-sand-light overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
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
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative pl-12 md:pl-20"
                  >
                    <div className="absolute -left-1 md:left-2 top-4 w-10 h-10 bg-brand-sand-light rounded-full border-2 border-brand-green flex items-center justify-center z-10 shadow-sm">
                      <exp.icon size={20} className="text-brand-green" strokeWidth={1.5} />
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white/60 hover:bg-white/70 transition-colors">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-dark-900 mb-1">{exp.company}</h4>
                          <span className="font-medium text-brand-green">{exp.role}</span>
                        </div>
                        <span className="shrink-0 text-sm font-medium bg-brand-sand/50 px-3 py-1 rounded-full text-dark-700">{exp.period}</span>
                      </div>
                      {exp.tasks.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {exp.tasks.map((task, i) => (
                            <li key={i} className="text-dark-700 font-light text-sm relative pl-4 before:absolute before:left-0 before:text-brand-green before:content-['•']">
                              {task}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Uddannelse */}
      <section className="py-24 bg-brand-sand overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
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
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative pl-12 md:pl-20"
                  >
                    <div className="absolute -left-1 md:left-2 top-4 w-10 h-10 bg-brand-sand rounded-full border-2 border-brand-green flex items-center justify-center z-10 shadow-sm">
                      <edu.icon size={20} className="text-brand-green" strokeWidth={1.5} />
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white/60 hover:bg-white/70 transition-colors relative">
                      {edu.badge && (
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          className="absolute -top-3 left-6 md:left-8 bg-brand-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md"
                        >
                          {edu.badge}
                        </motion.div>
                      )}
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-dark-900 mb-1">{edu.school}</h4>
                          <span className="font-medium text-brand-green">{edu.degree}</span>
                        </div>
                        <span className="shrink-0 text-sm font-medium bg-brand-sand/50 px-3 py-1 rounded-full text-dark-700">{edu.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-sand-light overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase flex items-center justify-center gap-3 mb-4">
              <Star size={20} strokeWidth={1.5} /> Personlige
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif text-dark-900 uppercase">Kompetencer og Interesser</h2>
          </motion.div>
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
                    <motion.span 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-4 py-2 bg-brand-sand/50 text-dark-700 rounded-lg text-sm tracking-wide border border-white/50"
                    >
                      {skill}
                    </motion.span>
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
                    <motion.span 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-4 py-2 bg-brand-sand/50 text-dark-700 rounded-lg text-sm tracking-wide border border-white/50"
                    >
                      {lang}
                    </motion.span>
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
                    <motion.span 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-4 py-2 bg-brand-sand/50 text-dark-700 rounded-lg text-sm tracking-wide border border-white/50"
                    >
                      {skill}
                    </motion.span>
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

    {/* Værkstedsarbejde */}
    <section className="py-24 bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-white uppercase tracking-wider mb-6">
            Kreative Hobbyprojekter
          </h2>
          <p className="text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Her er et udpluk af nogle af de projekter, jeg har lavet i værkstedet. Det er min måde at koble af på og samtidig udfordre min kreativitet gennem håndværk, design og nye idéer.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full flex group">
        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-auto scrollbar-hide gap-4 md:gap-6 px-2 md:px-3 pb-8"
          style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
        >
          {[...workshopImages, ...workshopImages].map((src, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx % workshopImages.length)}
              className="relative w-[280px] md:w-[360px] lg:w-[22vw] shrink-0 aspect-[4/5] overflow-hidden bg-dark-800 cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={src}
                alt={`Værkstedsarbejde ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTA />

    <AnimatePresence>
      {activeImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { e.stopPropagation(); setActiveImageIndex(null); }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImageIndex(null); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(e); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-2"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext(e);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-2"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          <motion.div
            key={activeImageIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full h-full flex items-center justify-center relative cursor-auto z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper 
              initialScale={1} 
              minScale={0.5} 
              maxScale={5}
              centerOnInit={true}
              wheel={{ step: 0.15 }} zoomAnimation={{ disabled: false, animationTime: 400 }}
              pinch={{ disabled: false }}
              doubleClick={{ disabled: false }}
            >
              <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
                <img
                  src={workshopImages[activeImageIndex]}
                  alt="Forstørret billede"
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </TransformComponent>
            </TransformWrapper>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </>
  );
}
