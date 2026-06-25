import React from 'react';
import { JournalArticle } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface JournalCardProps {
  key?: React.Key;
  article: JournalArticle;
  onRead: (article: JournalArticle) => void;
}

export default function JournalCard({ article, onRead }: JournalCardProps) {
  return (
    <article 
      onClick={() => onRead(article)}
      className="group cursor-pointer flex flex-col justify-between bg-white border border-stone-200/40 p-4 transition-all duration-500 hover:shadow-md hover:border-stone-300"
    >
      <div className="space-y-4">
        {/* Editorial Frame Image */}
        <div className="aspect-[16/10] w-full overflow-hidden relative bg-stone-100">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors" />
        </div>

        {/* Category & Date Info */}
        <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-stone-400 font-sans">
          <span className="text-amber-700 font-medium">{article.category}</span>
          <span>{article.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg md:text-xl text-stone-900 tracking-wide font-light leading-snug group-hover:text-amber-700 transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-stone-500 font-light leading-relaxed tracking-wide">
          {article.excerpt}
        </p>
      </div>

      {/* Read Time / CTA */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-stone-100 text-[10px] tracking-widest uppercase font-medium">
        <span className="text-stone-400">{article.readTime}</span>
        <span className="text-stone-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Consult Article <ArrowUpRight size={12} className="text-amber-600" />
        </span>
      </div>
    </article>
  );
}
