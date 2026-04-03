import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  
  useGSAP(() => {
    // Parallax effect on hero image
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: '30%',
    });
  }, { scope: container });

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-ieee-deep text-ieee-light"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end pb-24 px-8 md:px-16 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0 hero-bg">
           <div className="absolute inset-0 bg-gradient-to-t from-ieee-deep via-ieee-deep/80 to-transparent z-10" />
           {/* Abstract shapes or image */}
           <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] bg-ieee-bright/20 rounded-full blur-[120px]" />
           <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-ieee-cyan/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center mt-auto pb-12">
          <div className="overflow-hidden mb-6">
             <motion.h1 
               initial={{ y: '100%' }}
               animate={{ y: 0 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
               className="text-7xl md:text-[10rem] leading-[0.9] font-display font-medium tracking-tighter"
             >
               Engineered <br/> For <span className="text-ieee-cyan italic">Impact.</span>
             </motion.h1>
          </div>
          
          <div className="overflow-hidden max-w-3xl mt-8">
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-xl md:text-2xl text-ieee-light/80 font-sans leading-relaxed"
            >
              We are the IEEE Student Branch at SRM University AP. Advancing technology for humanity through bold innovation, rigorous engineering, and visionary leadership.
            </motion.p>
          </div>
        </div>
      </section>

      {/* spacer to scroll down */}
      <section className="h-screen flex items-center justify-center relative z-10 bg-ieee-light text-ieee-deep rounded-t-[3rem] px-8 py-20 mt-[-2rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
         <div className="max-w-4xl text-center">
            <span className="text-ieee-bright font-sans uppercase tracking-[0.2em] font-bold text-sm mb-6 block">Our Mission</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
               Empowering the engineers of <span className="font-bold text-ieee-bright">SRM University AP</span> to push the boundaries of what's possible.
            </h2>
         </div>
      </section>
    </motion.div>
  );
}
