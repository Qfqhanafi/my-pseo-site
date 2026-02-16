import dataPrompts from '../data-prompt.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
          Kamus Prompt AI 🚀
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10">Direktori cerdas untuk optimasi AI Anda.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataPrompts.map((item) => (
            <Link 
              key={item.slug} 
              href={`/prompt/${item.slug}`}
              className="group p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-xl transition-all hover:border-blue-500 dark:hover:border-blue-400"
            >
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{item.category}</span>
              <h2 className="text-xl font-bold mt-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}