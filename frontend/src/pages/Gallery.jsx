import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200", title: "Global Summit 2026", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800", title: "Tech Workshop series", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800", title: "Executive Board Session", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800", title: "Robotics Showcase", span: "md:col-span-2" },
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", title: "Lab Inauguration", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", title: "Night Seminar", span: "md:col-span-3" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen text-white pt-32 pb-24"
    >
       <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <h1 className="text-6xl md:text-[8rem] font-display font-medium tracking-tighter leading-none mb-6">
             The <span className="italic text-ieee-cyan">Archive.</span>
          </h1>
          <p className="text-xl font-sans opacity-60 max-w-2xl mx-auto">
             Visual records of our workshops, seminars, and organizational milestones.
          </p>
       </div>

       {/* BENTO GRID GALLERY */}
       <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
             {images.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className={`relative rounded-3xl overflow-hidden group ${img.span}`}
                >
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-8">
                      <span className="font-display font-bold text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         {img.title}
                      </span>
                   </div>
                   <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                   />
                </motion.div>
             ))}
          </div>
       </div>

    </motion.div>
  );
}
