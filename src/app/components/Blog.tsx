import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Blog() {
  const posts = [
    {
      title: 'Attribution Models That Actually Work in 2026',
      date: 'March 1, 2026',
      image: 'https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjU2Njg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Why Your ROAS Metric Is Lying to You',
      date: 'February 28, 2026',
      image: 'https://images.unsplash.com/photo-1646953482850-901edd576c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzcyNTY2ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Conversion Rate Optimization: The Compound Effect',
      date: 'February 25, 2026',
      image: 'https://images.unsplash.com/photo-1764601841377-2fd86c9fd8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBpZGVudGl0eSUyMGRlc2lnbiUyMGJyYW5kaW5nfGVufDF8fHx8MTc3MjU2Njg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="blog" className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-start justify-between mb-12">
          <div>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="text-5xl font-semibold text-black">Performance insights that matter.</h2>
          </div>
          <a href="#" className="text-black hover:text-gray-600 flex items-center gap-2">
            View All <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[#666666]">{post.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}