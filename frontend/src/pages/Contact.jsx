import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ieee-light min-h-screen pt-32 pb-24 text-ieee-deep"
    >
      <div className="max-w-7xl mx-auto px-8">
         <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start justify-center">
            
            {/* Contact Header */}
            <div className="w-full md:w-5/12 flex flex-col text-center md:text-left">
               <h1 className="text-6xl md:text-[6rem] font-display font-medium tracking-tighter leading-none mb-8">
                  Get in <br/><span className="text-ieee-bright italic">Touch.</span>
               </h1>
               <p className="text-xl font-sans opacity-80 max-w-md mx-auto md:mx-0 leading-relaxed mb-12">
                  Have a question, looking to collaborate, or want to invite us to an event? Reach out to us through our direct channels.
               </p>
               <a 
                 href="mailto:contact@ieeesrmap.org" 
                 className="inline-flex items-center justify-center md:justify-start gap-3 bg-ieee-deep text-white px-8 py-4 rounded-full font-sans uppercase tracking-[0.2em] text-sm font-bold shadow-xl hover:bg-ieee-bright hover:shadow-2xl hover:-translate-y-1 transition-all w-fit mx-auto md:mx-0"
               >
                 Send an Email <ArrowUpRight size={20} />
               </a>
            </div>

            {/* Contact Info Cards */}
            <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-ieee-deep/5 flex flex-col gap-4 group hover:border-ieee-bright/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-ieee-light flex items-center justify-center text-ieee-bright group-hover:bg-ieee-bright group-hover:text-white transition-colors">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h3 className="font-display font-bold text-2xl mb-2">Our Hub</h3>
                     <p className="font-sans opacity-70 text-lg">Main Technical Block, Room 402<br/>SRM University AP, Amaravati<br/>Andhra Pradesh 522502</p>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-ieee-deep/5 flex flex-col gap-4 group hover:border-ieee-bright/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-ieee-light flex items-center justify-center text-ieee-bright group-hover:bg-ieee-bright group-hover:text-white transition-colors">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h3 className="font-display font-bold text-2xl mb-2">Email Us</h3>
                     <a href="mailto:contact@ieeesrmap.org" className="font-sans opacity-70 text-lg hover:text-ieee-bright hover:opacity-100 transition-colors">
                        contact@ieeesrmap.org
                     </a>
                     <br/>
                     <a href="mailto:support@ieeesrmap.org" className="font-sans opacity-70 text-lg hover:text-ieee-bright hover:opacity-100 transition-colors">
                        support@ieeesrmap.org
                     </a>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-ieee-deep/5 flex flex-col gap-4 group hover:border-ieee-bright/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-ieee-light flex items-center justify-center text-ieee-bright group-hover:bg-ieee-bright group-hover:text-white transition-colors">
                     <Phone size={24} />
                  </div>
                  <div>
                     <h3 className="font-display font-bold text-2xl mb-2">Call Us</h3>
                     <p className="font-sans opacity-70 text-lg">+91 98765 43210<br/>Mon - Fri, 9am - 5pm</p>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-ieee-deep/5 flex flex-col gap-4 group hover:border-ieee-bright/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-ieee-light flex items-center justify-center text-ieee-bright group-hover:bg-ieee-bright group-hover:text-white transition-colors">
                     <Globe size={24} />
                  </div>
                  <div>
                     <h3 className="font-display font-bold text-2xl mb-2">Socials</h3>
                     <div className="flex flex-col gap-1">
                        <a href="#" className="font-sans opacity-70 text-lg hover:text-ieee-bright hover:opacity-100 transition-colors">LinkedIn: IEEE SRM AP</a>
                        <a href="#" className="font-sans opacity-70 text-lg hover:text-ieee-bright hover:opacity-100 transition-colors">Instagram: @ieeesrmap</a>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </motion.div>
  );
}
