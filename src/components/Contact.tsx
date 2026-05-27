import { motion } from 'motion/react';
import { ArrowUpRight, Send, CheckCircle2, Phone, Mail, Linkedin } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/4K Logo.webp';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/soren.kjeldsen@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: formData.subject || 'Ny henvendelse fra hjemmesiden',
          Navn: formData.name,
          Email: formData.email,
          Besked: formData.message,
          _template: 'box' // Uses a cleaner email template
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === "false") {
        throw new Error(data.message || 'Der skete en fejl. Prøv igen senere.');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer id="contact" className="bg-brand-sand border-t border-brand-green/10 pt-32 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase block mb-4">Lås Op For Potentialet</span>
            <h2 className="text-4xl md:text-5xl lg:text-[72px] font-serif text-dark-900 leading-tight mb-8 w-full max-w-[800px]">
              <span className="whitespace-nowrap">Lad os tage en snak</span> <br />
              <span className="italic text-brand-green-light">over en kop kaffe.</span>
            </h2>
            <p className="text-dark-800 font-light max-w-md mb-12">
              Står du med et projekt, der kræver kompromisløs projektstyring og teknisk formgivning? Kontakt mig for en uforpligtende dialog.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {isSuccess ? (
              <div className="bg-brand-green/10 border border-brand-green/20 p-8 flex flex-col items-center justify-center text-center space-y-4 rounded-xl min-h-[400px]">
                <CheckCircle2 className="text-brand-green w-16 h-16" strokeWidth={1} />
                <h3 className="text-2xl font-serif text-dark-900">Tak for din besked</h3>
                <p className="text-dark-800 font-light">Jeg vender tilbage til dig hurtigst muligt.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-brand-green hover:text-dark-900 transition-colors"
                >
                  Send en ny besked
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-gray-500 tracking-widest uppercase ml-1">Navn</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-black/10 px-4 py-3 outline-none focus:border-brand-green transition-colors placeholder:text-black/20 text-dark-900"
                      placeholder="Dit navn"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-gray-500 tracking-widest uppercase ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-black/10 px-4 py-3 outline-none focus:border-brand-green transition-colors placeholder:text-black/20 text-dark-900"
                      placeholder="din@email.dk"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs text-gray-500 tracking-widest uppercase ml-1">Emne</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-black/10 px-4 py-3 outline-none focus:border-brand-green transition-colors placeholder:text-black/20 text-dark-900"
                    placeholder="Hvad drejer forespørgslen sig om?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-gray-500 tracking-widest uppercase ml-1">Besked</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-black/10 px-4 py-3 outline-none focus:border-brand-green transition-colors placeholder:text-black/20 text-dark-900 resize-none"
                    placeholder="Skriv din besked her..."
                  />
                </div>
                
                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-3 w-full bg-brand-green-light hover:bg-brand-green border border-brand-green-light hover:border-brand-green px-6 py-4 uppercase tracking-widest text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-white transition-colors">
                    {isSubmitting ? 'Sender...' : 'Send Besked'}
                  </span>
                  <Send className="w-4 h-4 text-white transition-colors" />
                </button>
              </form>
            )}
            
            <div className="mt-8 flex flex-row items-center justify-center sm:justify-start pt-6 gap-2 sm:gap-3 border-t border-black/10 flex-wrap sm:flex-nowrap pb-2 w-full">
               <div className="group flex justify-center items-center gap-1.5 sm:gap-2 bg-white/30 border border-black/5 hover:bg-white/50 hover:border-brand-green text-dark-900 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 font-sans font-medium text-[10px] sm:text-xs">
                 <Phone size={14} className="text-dark-600 group-hover:text-brand-green transition-colors shrink-0" />
                 +45 60 68 12 45
               </div>
               <div className="group flex justify-center items-center gap-1.5 sm:gap-2 bg-white/30 border border-black/5 hover:bg-white/50 hover:border-brand-green text-dark-900 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 font-sans font-medium text-[10px] sm:text-xs">
                 <Mail size={14} className="text-dark-600 group-hover:text-brand-green transition-colors shrink-0" />
                 soren.kjeldsen@hotmail.com
               </div>
               <a href="https://www.linkedin.com/in/soerenkjeldsen/" target="_blank" rel="noopener noreferrer" className="group flex justify-center items-center gap-1.5 sm:gap-2 bg-white/30 border border-black/5 hover:bg-white/50 hover:border-brand-green text-dark-900 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 font-sans font-medium text-[10px] sm:text-xs">
                 <Linkedin size={14} fill="currentColor" className="text-dark-600 group-hover:text-[#0A66C2] transition-colors shrink-0" />
                 LinkedIn
               </a>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 mt-16 border-t border-black/10 text-xs text-gray-500 tracking-wider">
          <Link to="/">
            <img 
              src={logoImage} 
              alt="Søren Kjeldsen Logo" 
              className="h-16 md:h-20 w-auto opacity-50 grayscale mix-blend-multiply mb-4 md:mb-0 hover:opacity-100 transition-opacity block"
            />
          </Link>
          <p>© {new Date().getFullYear()} SØREN KJELDSEN. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
