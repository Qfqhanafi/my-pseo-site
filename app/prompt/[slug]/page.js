import dataPrompts from '../../../data-prompt.json';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  // Penting: Di Next.js 2026, params harus di-await
  const { slug } = await params;
  
  // Cari data di JSON yang slug-nya cocok dengan URL
  const data = dataPrompts.find((item) => item.slug === slug);

  // Jika tidak ketemu, kasih halaman 404
  if (!data) {
    return notFound();
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{data.title}</h1>
      <p style={{ color: 'blue', fontWeight: 'bold' }}>Kategori: {data.category}</p>
      <div style={{ background: '#f0f0f0', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
        <code>{data.isi_prompt}</code>
      </div>
    </div>
  );
}