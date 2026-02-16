import dataPrompts from '../../../../data-prompt.json';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  // Solusi Error Digest: Pastikan params di-await sebelum digunakan
  const { slug } = await params;
  
  const data = dataPrompts.find((item) => item.slug === slug);

  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-6 md:p-10">
        <header className="mb-8">
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-bold uppercase">
            {data.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            {data.title}
          </h1>
        </header>

        <main className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
          <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-2 block">
            Copy-Paste Prompt:
          </label>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-mono whitespace-pre-wrap italic">
            "{data.isi_prompt}"
          </p>
        </main>

        <footer className="mt-10 border-t border-slate-100 dark:border-slate-800 pt-6">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
            ← Kembali ke Katalog
          </a>
        </footer>
      </div>
    </div>
  );
}