'use client'
import { useState } from 'react'

export default function Admin() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  async function submitPost() {
    setLoading(true)
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
    setLoading(false)
    setTitle('')
    setContent('')
    alert('Berita berhasil di-publish!')
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tulis Berita Baru</h1>
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Judul Berita" 
        className="border w-full p-3 mb-4 rounded" 
      />
      <textarea 
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Isi berita..." 
        className="border w-full p-3 h-64 mb-4 rounded" 
      />
      <button 
        onClick={submitPost} 
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded disabled:bg-gray-400"
      >
        {loading ? 'Posting...' : 'Publish'}
      </button>
    </div>
  )
}
