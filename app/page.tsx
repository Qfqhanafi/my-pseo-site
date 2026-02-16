import dataPrompts from '../data-prompt.json';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-10 font-sans bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-slate-900">Kamus Prompt AI 2026 🚀</h1>
      <p className="text-slate-600 mb-10">Koleksi prompt terbaik untuk produktivitas Anda.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dataPrompts.map((item) => (
          <Link 
            key={item.slug} 
            href={`/prompt/${item.slug}`}
            className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-all hover:border-blue-500 bg-slate-50 group"
          >
            <span className="text-xs font-bold text-blue-600 uppercase">{item.category}</span>
            <h2 className="text-xl font-semibold mt-2 text-slate-900 group-hover:text-blue-600">
              {item.title}
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Klik untuk lihat prompt &rarr;</p>
          </Link>
        ))}
      </div>
    </div>
  );
}