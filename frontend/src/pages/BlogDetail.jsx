import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { useRef } from 'react';

export default function BlogDetail() {
  const { id } = useParams();
  const ref = useRef(null);
  
  // Parallax for the hero image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["top top", "bottom start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Mock data for the article based on ID could go here.
  // We'll use static data for the demonstration.
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen text-ieee-deep"
    >
       {/* Hero Parallax Area */}
       <div ref={ref} className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
               alt="Cover" 
               className="w-full h-full object-cover"
             />
          </motion.div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 w-full z-20 text-white pb-12 px-8">
             <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-sans uppercase tracking-[0.2em] text-xs font-bold mb-8 transition-colors">
                   <ArrowLeft size={16} /> Back to Signal
                </Link>
                <div className="mb-4">
                   <span className="bg-ieee-bright text-white px-4 py-2 rounded-full text-xs font-sans uppercase tracking-widest font-bold">
                      AI & Innovation
                   </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-display font-medium leading-[1.1] mb-6">
                   AI in Healthcare: Integrating Artificial Intelligence in Medical Fields
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6 opacity-80 border-t border-white/20 pt-6 mt-8">
                   <div className="flex items-center gap-3 font-sans uppercase tracking-widest font-bold text-sm">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                         <User size={18} />
                      </div>
                      Dept. of Computer Science
                   </div>
                   <div className="hidden md:block w-1 h-1 rounded-full bg-white/50" />
                   <div className="flex items-center gap-2 font-mono text-sm">
                      <Calendar size={18} /> <span>October 12, 2026</span>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Article Body */}
       <div className="max-w-4xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row gap-16 relative">
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
             <p className="lead text-2xl font-sans opacity-70 mb-12">
                Exploring the fundamental shifts in healthcare architectures as IEEE SRM AP hosts industry experts to discuss machine learning applications in predictive diagnostics.
             </p>
             
             <h2 className="text-3xl font-display font-bold mt-16 mb-6">Breaking the Diagnostic Paradigm</h2>
             <p className="font-sans leading-relaxed text-ieee-deep/80 mb-8">
                For over a century, medical diagnostics relied exclusively on human cognitive processing. Today, we are swiftly approaching the stage where deep learning algorithms can process medical imaging with higher precision and speed than any singular radiologist. 
             </p>

             <p className="font-sans leading-relaxed text-ieee-deep/80 mb-8">
               At SRM University AP, our recent collaborative workshop with the Department of Electronics and Communication Engineering focused heavily on how AI does not replace doctors, but instead harnesses vast data lakes. Utilizing Convolutional Neural Networks (CNNs), we can theoretically process terabytes of MRI data in seconds to find anomalies invisible to the human eye.
             </p>

             <blockquote className="border-l-4 border-ieee-bright pl-6 my-12 text-2xl font-display italic text-ieee-deep">
                "The shift to AI-assisted healthcare isn't just a software upgrade; it's a fundamental rewrite of what is medically possible."
             </blockquote>

             <h2 className="text-3xl font-display font-bold mt-16 mb-6">Our Branch's Role in Research</h2>
             <p className="font-sans leading-relaxed text-ieee-deep/80 mb-8">
                As a prominent engineering organization, the IEEE SRM AP Student Branch is dedicated to establishing the baseline protocols and models needed to make predictive healthcare AI viable in rural India. Through hackathons and expert seminars, we are bridging the gap between raw code and actual clinical implementation.
             </p>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden md:block w-1/4">
             <div className="sticky top-40 flex flex-col gap-8">
                <div>
                   <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-ieee-deep/50 block mb-4">Share Article</span>
                   <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full border border-ieee-deep/10 flex items-center justify-center hover:bg-ieee-bright hover:text-white hover:border-transparent transition-all">
                         <Share2 size={16} />
                      </button>
                   </div>
                </div>
                <div className="bg-ieee-light p-6 rounded-2xl">
                   <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-ieee-deep/50 block mb-2">Author</span>
                   <h4 className="font-display font-bold text-lg mb-1">Computer Science Dept.</h4>
                   <p className="text-sm font-sans opacity-70">Event Editorial Team at SRM AP.</p>
                </div>
             </div>
          </div>

       </div>
    </motion.div>
  );
}
