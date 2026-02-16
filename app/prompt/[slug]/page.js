import dataPrompts from '../../../data-prompt.json';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const { slug } = await params;
  const data = dataPrompts.find((item) => item.slug === slug);

  if (!data) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-10 font-sans bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">{data.title}</h1>
      <p className="text-blue-600 font-bold mb-6">Kategori: {data.category}</p>
      
      <div className="bg-slate-100 p-6 rounded-lg border-2 border-dashed border-slate-300">
        <p className="text-slate-800 leading-relaxed font-mono whitespace-pre-wrap">
          {data.isi_prompt}
        </p>
      </div>
      
      <Link href="/" className="inline-block mt-8 text-blue-600 hover:underline">
        &larr; Kembali ke Daftar
      </Link>
    </div>
  );
}