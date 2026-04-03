import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogList() {
  const featuredPost = {
    id: '1',
    title: "AI in Healthcare: Integrating Artificial Intelligence in Medical Fields",
    category: "AI & Innovation",
    date: "Oct 12, 2026",
    author: "Dept. of Computer Science",
    excerpt: "Exploring the fundamental shifts in healthcare architectures as IEEE SRM AP hosts industry experts to discuss machine learning applications in predictive diagnostics.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
  };

  const posts = [
    {
      id: '2',
      title: "5G Technology Seminars: The Future of Telecommunications",
      category: "Telecommunications",
      date: "Sep 28, 2026",
      author: "ECE Department",
      img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: '3',
      title: "IEEE Guntur Subsection Collaboration & Enrichment",
      category: "Networking",
      date: "Sep 15, 2026",
      author: "Student Branch Chair",
      img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: '4',
      title: "Building the Research Ecosystem at SRM AP",
      category: "Academics",
      date: "Aug 22, 2026",
      author: "Editorial Team",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ieee-light min-h-screen pt-32 pb-24 text-ieee-deep"
    >
       <div className="max-w-7xl mx-auto px-8 mb-16">
          <h1 className="text-6xl md:text-[8rem] font-display font-medium tracking-tighter leading-none mb-6">
             The <span className="italic text-ieee-bright">Signal.</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans opacity-70 max-w-2xl">
             Insights, research breakdowns, and technical perspectives from the SRM AP engineering community.
          </p>
       </div>

       {/* Featured Post (Massive Card) */}
       <div className="max-w-7xl mx-auto px-8 mb-24">
          <Link to={`/blog/${featuredPost.id}`} className="block group">
             <div className="relative h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-colors duration-500" />
                <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 text-white w-full">
                   <span className="inline-block bg-ieee-bright text-white px-4 py-2 rounded-full text-xs font-sans uppercase tracking-widest font-bold mb-6">
                      {featuredPost.category}
                   </span>
                   <h2 className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-tight mb-4">
                      {featuredPost.title}
                   </h2>
                   <p className="text-lg md:text-xl font-sans opacity-80 max-w-2xl hidden md:block">
                      {featuredPost.excerpt}
                   </p>
                </div>
             </div>
             
             <div className="flex items-center justify-between border-b border-ieee-deep/10 pb-6">
                <div className="flex items-center gap-6 opacity-70">
                   <div className="flex items-center gap-2 font-mono text-sm">
                      <Calendar size={16} /> <span>{featuredPost.date}</span>
                   </div>
                   <div className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest">
                      <User size={16} /> <span>{featuredPost.author}</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-ieee-bright group-hover:text-ieee-deep transition-colors">
                   Read Article <ArrowRight size={20} />
                </div>
             </div>
          </Link>
       </div>

       {/* Grid of latest posts */}
       <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post) => (
             <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col">
                <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-500 ease-out" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-ieee-deep px-3 py-1 rounded-full text-xs font-sans uppercase tracking-widest font-bold">
                      {post.category}
                   </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold leading-tight mb-4 group-hover:text-ieee-bright transition-colors">
                   {post.title}
                </h3>
                
                <div className="mt-auto flex items-center justify-between opacity-60 text-sm border-t border-ieee-deep/10 pt-4">
                   <span className="font-mono">{post.date}</span>
                   <span className="font-sans uppercase tracking-widest">{post.author}</span>
                </div>
             </Link>
          ))}
       </div>
    </motion.div>
  );
}
